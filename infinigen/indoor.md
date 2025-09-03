以下是 Infinigen 室内场景生成（`generate_indoors.py`）中常用的命令行参数，结合代码和文档整理，涵盖基础配置、任务控制、场景约束等类别：


### **1. 基础配置参数**
| 参数                | 说明                                                                 | 示例                                  |
|---------------------|----------------------------------------------------------------------|---------------------------------------|
| `--seed`            | 随机种子，控制场景生成的随机性（支持整数或十六进制字符串）           | `--seed 123` 或 `--seed 0xabc`        |
| `--output_folder`   | 输出文件路径（场景、渲染结果等保存目录）                             | `--output_folder outputs/my_room`     |
| `--input_folder`    | 输入文件夹（用于基于已有场景继续生成，如从 `coarse` 到 `render` 阶段） | `--input_folder outputs/prev_stage`   |
| `-g, --configs`     | 指定 Gin 配置文件（无需 `.gin` 后缀），用于加载预定义场景规则         | `-g singleroom.gin overhead.gin`      |
| `-p, --overrides`   | 覆盖配置参数（优先级高于配置文件），格式为 `模块.参数=值`             | `-p compose_indoors.terrain_enabled=False` |


### **2. 任务控制参数**
| 参数                | 说明                                                                 | 示例                                  |
|---------------------|----------------------------------------------------------------------|---------------------------------------|
| `--task`            | 指定生成阶段（可多选，按顺序执行）                                   | `--task coarse populate render`       |
|                     | 可选阶段：                                                           |                                       |
|                     | - `coarse`：生成粗略场景结构（房间、墙体等）                         |                                       |
|                     | - `populate`：填充物体（家具、装饰等）                               |                                       |
|                     | - `fine_terrain`：细化地形（如地面细节）                             |                                       |
|                     | - `ground_truth`：生成真值数据（深度、语义标签等）                   |                                       |
|                     | - `render`：渲染图像/视频                                            |                                       |
|                     | - `mesh_save`：保存网格模型                                          |                                       |
| `--task_uniqname`   | 任务唯一名称（用于区分同一输出目录下的不同任务）                     | `--task_uniqname my_custom_task`      |


### **3. 日志与调试参数**
| 参数                | 说明                                                                 | 示例                                  |
|---------------------|----------------------------------------------------------------------|---------------------------------------|
| `-d, --debug`       | 开启调试模式（输出详细日志）                                         | `--debug`                             |
| `-v, --verbose`     | 开启详细日志模式（INFO 级别）                                        | `--verbose`                           |


### **4. 场景约束与物体控制参数**
通过 `-p` 传递，用于限制房间类型、物体类型等，需结合 `Semantics` 枚举（见 `infinigen/core/tags.py`）：

| 参数                                  | 说明                                                                 | 示例                                      |
|---------------------------------------|----------------------------------------------------------------------|-------------------------------------------|
| `compose_indoors.room_tags`           | 限制生成的房间类型（如客厅、厨房）                                   | `-p compose_indoors.room_tags=["living-room", "kitchen"]` |
| `compose_indoors.terrain_enabled`     | 是否启用地形（室内场景通常设为 `False`）                             | `-p compose_indoors.terrain_enabled=False` |
| `restrict_solving.solve_max_rooms`    | 限制生成的最大房间数量                                               | `-p restrict_solving.solve_max_rooms=1`   |
| `restrict_solving.restrict_parent_rooms` | 限制父房间类型（仅在指定房间内生成物体）                            | `-p restrict_solving.restrict_parent_rooms=["LivingRoom"]` |
| `restrict_solving.restrict_child_primary` | 限制直接放置在房间内的主要物体类型（如沙发、桌子）                   | `-p restrict_solving.restrict_child_primary=["LoungeSeating", "Table"]` |
| `restrict_solving.restrict_child_secondary` | 限制放置在其他物体上的次要物体类型（如桌上的物品）                   | `-p restrict_solving.restrict_child_secondary=["Dishware"]` |
| `restrict_solving.consgraph_filters`  | 过滤约束图，仅保留与指定物体相关的规则（优化布局逻辑）               | `-p restrict_solving.consgraph_filters=["sofa", "table"]` |
| `compose_indoors.solve_steps_large`   | 大型物体布局求解步数（影响布局精度）                                 | `-p compose_indoors.solve_steps_large=100` |
| `compose_indoors.solve_steps_medium`  | 中型物体布局求解步数                                                 | `-p compose_indoors.solve_steps_medium=80` |
| `compose_indoors.solve_steps_small`   | 小型物体布局求解步数                                                 | `-p compose_indoors.solve_steps_small=60` |


### **5. 渲染与输出参数**
| 参数                                  | 说明                                                                 | 示例                                      |
|---------------------------------------|----------------------------------------------------------------------|-------------------------------------------|
| `render.samples`                      | 渲染采样数（影响图像质量，值越高越清晰）                             | `-p render.samples=200`                   |
| `render.resolution`                   | 渲染分辨率（宽x高）                                                  | `-p render.resolution=(1920, 1080)`       |
| `camera.camera_pose_proposal.altitude` | 相机高度范围（控制视角）                                             | `-p camera.camera_pose_proposal.altitude=["uniform", 20, 30]` |


### 说明：
- 所有参数可通过 `python -m infinigen_examples.generate_indoors --help` 查看最新文档。
- 物体类型参数（如 `restrict_child_primary`）的值需对应 `Semantics` 枚举中的标签（如 `LoungeSeating` 对应沙发，`Table` 对应桌子），具体可参考 `infinigen/core/tags.py`。
- 复杂配置建议通过 `-g` 加载预定义 `.gin` 文件（如 `singleroom.gin`），再用 `-p` 覆盖个别参数。