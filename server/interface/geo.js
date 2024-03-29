import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({prefix: '/geo'})

const sign = '6ae9c922fbf883a277df582526bd86d3';
//e85e57680f2f721f9c3265fa8902768c
router.get('/getPosition',async (ctx)=>{
  let {status,data:{provice,city}}=await axios.get(`http://117.51.155.165/geo/getPosition?sign=${sign}`)
  if(status===200){
    ctx.body={
      provice,
      city
    }
  }else{
    ctx.body={
      provice:'',
      city:''
    }
  }

  router.get('/province', async (ctx) => {
    // let province = await Province.find()
    // ctx.body = {
    //   province: province.map(item => {
    //     return {
    //       id: item.id,
    //       name: item.value[0]
    //     }
    //   })
    // }
    let {status, data: {
        province
      }} = await axios.get(`http://117.51.155.165/geo/province?sign=${sign}`)
    ctx.body = {
      province: status === 200
        ? province
        : []
    }
  })

  router.get('/province/:id', async (ctx) => {
    // let city = await City.findOne({id: ctx.params.id})
    //
    // ctx.body = {
    //   code: 0,
    //   city: city.value.map(item => {
    //     return {province: item.province, id: item.id, name: item.name}
    //   })
    // }
    let {status, data: {
        city
      }} = await axios.get(`http://117.51.155.165/geo/province/${ctx.params.id}?sign=${sign}`)
    if (status === 200) {
      ctx.body = {
        city
      }
    } else {
      ctx.body = {
        city: []
      }
    }
  })
  
  router.get('/city', async (ctx) => {
    // let city = []
    // let result = await City.find()
    // result.forEach(item => {
    //   city = city.concat(item.value)
    // })
    // ctx.body = {
    //   code: 0,
    //   city: city.map(item => {
    //     return {
    //       province: item.province,
    //       id: item.id,
    //       name: item.name === '市辖区' || item.name === '省直辖县级行政区划'
    //         ? item.province
    //         : item.name
    //     }
    //   })
    // }
    let {status, data: {
        city
      }} = await axios.get(`http://117.51.155.165/geo/city?sign=${sign}`);
    if (status === 200) {
      ctx.body = {
        city
      }
    } else {
      ctx.body = {
        city: []
      }
    }
  })
  
  router.get('/hotCity', async (ctx) => {
    // let list = [
    //   '北京市',
    //   '上海市',
    //   '广州市',
    //   '深圳市',
    //   '天津市',
    //   '西安市',
    //   '杭州市',
    //   '南京市',
    //   '武汉市',
    //   '成都市'
    // ]
    // let result = await City.find()
    // let nList = []
    // result.forEach(item => {
    //   nList = nList.concat(item.value.filter(k => list.includes(k.name) || list.includes(k.province)))
    // })
    // ctx.body = {
    //   hots: nList
    // }
    let {status, data: {
        hots
      }} = await axios.get(`http://117.51.155.165/geo/hotCity?sign=${sign}`);
    if (status === 200) {
      ctx.body = {
        hots
      }
    } else {
      ctx.body = {
        hots: []
      }
    }
  })

  router.get('/menu', async (ctx) => {
    // const result = await Menu.findOne()
    // ctx.body = {
    //   menu: result.menu
    // }
    let {status, data: {
        menu
      }} = await axios.get(`http://117.51.155.165/geo/menu?sign=${sign}`);
    if (status === 200) {
      ctx.body = {
        menu
      }
    } else {
      ctx.body = {
        menu: []
      }
    }
  })
})

export default router;