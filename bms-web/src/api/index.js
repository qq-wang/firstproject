import request from '@/utils/request'

// 导出表格
export function exportExcel() {
  return request({
    url: '/qiniu/upload/token', // 假地址 自行替换
    method: 'get',
    headers: {
      'authentication': ''
    },
    responseType: 'blob'
  })
}
