import time

import qrcode
from alipay import AliPay


ALIPAY_APPID = "2021005103654943"  # 请替换为您的APPID

# 应用私钥（PKCS1格式，掐头去尾，不换行不空格）
APP_PRIVATE_KEY = open("./app_private_key.pem").read()
# 支付宝公钥 (确保密钥格式正确，包含头部和尾部)
ALIPAY_PUBLIC_KEY = open("./alipay_public_key.pem").read()

alipay=AliPay(appid=ALIPAY_APPID, ##appid，用沙箱的话会给你个
              app_notify_url=None,   ##默认回调url，需要外网才能跳转，
              app_private_key_string=APP_PRIVATE_KEY,  ##本地私钥

              ##支付宝的公钥，验证支付回传消息时使用,不是自己生成的公钥，
              alipay_public_key_string=ALIPAY_PUBLIC_KEY,
              )

# order_string = alipay.api_alipay_trade_page_pay(
#     out_trade_no="20161112",
#     total_amount=0.01,
#     subject="subject",
# )

def get_qr_code(code_url):
    """
    生成二维码
    :param code_url:  创建预付订单时生成的code_url
    :return:
    """
    qr=qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=1,
    )
    qr.add_data(code_url) ##二维码所含信息(支付地址等)
    img=qr.make_image()   ##生成二维码图片
    img.save('./qr_test_ali.png')
    print('二维码保存成功')


def PreCreate(subject,out_trade_no:int,total_amount:float):
    """
    创建预付订单；alipay.trade.precreate
    :param subject:         商品名称
    :param out_trade_no:    订单号
    :param total_amount:    价格
    :return:


    success response  = {
          "alipay_trade_precreate_response": {
            "msg": "Success",
            "out_trade_no": "out_trade_no17",
            "code": "10000",
            "qr_code": "https://qr.alipay.com/bax03431ljhokirwl38f00a7"
          },
          "sign": ""
        }

        failed response = {
          "alipay_trade_precreate_response": {
            "msg": "Business Failed",
            "sub_code": "ACQ.TOTAL_FEE_EXCEED",
            "code": "40004",
            "sub_msg": "订单金额超过限额"
          },
          "sign": ""
        }
    """
    result=alipay.api_alipay_trade_precreate(
        subject=subject,
        out_trade_no=out_trade_no,
        total_amount=total_amount)
    print('返回值',result)
    code_url=result.get('qr_code')  ##qr_code:创建预付订单成功时返回的："qr_code": "https://qr.alipay.com/bax03431ljhokirwl38f00a7"

    if  not code_url:
        print('预付订单创建失败：',result.get('msg'))
        return
    else:
        print('预付订单创建成功：',result.get('msg'))
        ##如果时success response的话去执行get_qr_code函数
        get_qr_code(code_url)   ##生成一个带有qr_code信息的二维码
        #return  code_url
def query_order(out_trade_no:int,cancel_time:int  and  'secs'):
    """
    订单状态查询：alipay.trade.query
    :param out_trade_no:  商户订单号
    :param cancel_time:   设置支付时间
    :return:

     response:
    "trade_status": "TRADE_SUCCESS",
    "code": "10000",
    """
    print('预付订单已创建，请在%s秒内支付' %cancel_time)
    ##

    """
    轮询设置的支付时间每次等1s
    """
    for i  in range(cancel_time):
        print('还有：%s s支付时间' %cancel_time)
        time.sleep(1)
        ##订单查询
        result=alipay.api_alipay_trade_query(out_trade_no=out_trade_no)
        if  result.get("trade_status","")=="TRADE_SUCCESS":
            print('订单已支付')
            print('订单查询返回值：',result)
            break
        cancel_time-=1
        if cancel_time<=0:
            ##如果超过支付时间，执行cancel_order函数 ，撤销订单
            cancel_order(out_trade_no,cancel_time)
            return
def cancel_order(out_trade_no:int,cancel_time=None):
    """
    撤销订单：alipay.trade.cancel
    :param out_trade_no:    商户订单号
    :param cancel_time:     设置的支付时间
    :return:

    assert (out_trade_no is not None) or (trade_no is not None),\
            "Both trade_no and out_trade_no are None"
    订单号out_trade_no不能为空
    """
    result=alipay.api_alipay_trade_cancel(out_trade_no=out_trade_no)
    resp_status=result.get('msg')
    if  resp_status=="Success":  #撤销成功

            if cancel_time==0:
                print('%s秒还未支付订单，订单已被取消'  %cancel_time)
    else:
        print('请求失败',resp_status)

def roll_refund(out_trade_no:str or int,refund_amount:int  or  float,out_request_no:str):

    """
    退款操作：alipay.trade.refund
    :param out_trade_no:        商户订单号
    :param refund_amount:       退款金额，小于等于订单金额
    :param out_request_no:      商户自定义参数，用来标识该次退款请求的唯一性,可使用 out_trade_no_退款金额*100 的构造方式
    :return:
    """
    result=alipay.api_alipay_trade_refund(out_trade_no=out_trade_no,
                                          refund_amount=refund_amount,
                                          out_request_no=out_request_no)
    if  result['code']=="10000":#调用成功则返回result
        return result
    else:
        return result['msg']  #接口调用失败则返回msg
def fastpay_refund(out_trade_no,out_request_no):
    """
    统一收单交易退款查询：alipay.trade.fastpay.refund.query
    :param out_trade_no:商户订单号
    :param out_request_no:商户自定义的单次退款请求标识符
    :return:
    """
    result=alipay.api_alipay_trade_fastpay_refund_query(out_trade_no=out_trade_no,out_request_no=out_request_no)
    if  result['code']=='10000':
        return result
    else:
        return result['msg']

if __name__ == '__main__':
    ##创建预订单
    ##商品名称
    subject='蚂蚁矿机'
    ##订单号
    out_trade_no=int(time.time())  ##将当前时间的时间戳转化为整型用做订单号
    ##价格
    total_amount=0.01
    PreCreate(subject=subject,out_trade_no=out_trade_no,total_amount=total_amount)

    ##订单查询
    ##当你设置支付时间的话，时间过了，二维码会失效
    cancel_time=30
    query_order(out_trade_no,cancel_time)