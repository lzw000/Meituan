export default {
  dbs: 'mongodb://localhost:27017/student',
  redis:{
    get host(){
      return 'localhost'
    },
    get port(){
      return 6379
    }
  },
  smtp:{
    get host(){
      return 'stmp.qq.com'
    },
    get user(){
      return '1206678340@qq.com'
    },
    get pass(){
      return 'xrpmvjarzlrkigfa'
    },
    get code(){
      return ()=>{
        return Math.random().toString(16).slice(2,6).toUpperCase()
      }
    },
    get expire(){
      return ()=>{
        return new Date().getTime()+60*60*1000
      }
    }
  }
}