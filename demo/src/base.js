exports.install = function (Vue, options) {
  Vue.prototype.requestData = function(msg,that){
    if(msg == 'zhaobiao'){
      // if(this.GLOBAL.countOfURL != 0)
      this.$axios.get('http://120.26.144.75:8080/showBids',msg).then(function (response) {
        console.log(response.data);
        that.data= response.data;
        that.pageCount =Math.ceil(that.data.length/15);
        that.isConnected = true;
        that.isConnecting = false;
        // this.GLOBAL.countOfURL++;
      }).catch(function (error) {
        console.log(error);
        that.isConnected = false;
        that.isConnecting = false;
      });
    }
    else if(msg == 'heatmap'){
      var urls = [
        'http://120.26.144.75:8080/showVipProject',
        'http://120.26.144.75:8080/showShenpiProject',
        'http://120.26.144.75:8080/showNizaijianProject',
        'http://120.26.144.75:8080/showPppProject',
      ]
      for(var i=0;i<4;i++){
        let j = i;
        this.$axios.get(urls[j],msg).then(function (response) {
          console.log(response.data);
          that.data[j].item = response.data.slice(0,5);
          if(j == 3){
            that.isConnected = true;
            that.isConnecting = false;
          }
        }).catch(function (error) {
          console.log(error);
          that.isConnected = false;
          that.isConnecting = false;
        });
      }
    }
    else if(msg == 'satellite'){
      var urls = [
        'http://120.26.144.75:8080/showSupplier',
        'http://120.26.144.75:8080/showProprietor',
        'http://120.26.144.75:8080/showInstitution',
        'http://120.26.144.75:8080/showDesigning'
      ]
      for(var i=0;i<4;i++){
        let j = i;
        this.$axios.get(urls[j],msg).then(function (response) {
          console.log(response.data);
          that.data[j].item = response.data;
          if(j == 3){
            that.isConnected = true;
            that.isConnecting = false;
          }
        }).catch(function (error) {
          console.log(error);
          that.isConnected = false;
          that.isConnecting = false;
        });
      }
    }
    else if(msg == 'zixun'){
      this.$axios.get('http://120.26.144.75:8080/showCounsel',msg).then(function (response) {
        console.log(response.data);
        that.data= response.data;
        that.pageCount =Math.ceil(that.data.length/4);
        that.isConnected = true;
        that.isConnecting = false;
      }).catch(function (error) {
        console.log(error);
        that.isConnected = false;
        that.isConnecting = false;
      });
    }
    else if(msg == 'all'){
      this.$axios.get('http://120.26.144.75:8080/getCount',msg).then(function (response) {
        console.log(response.data);
        that.data= response.data.res;
        that.isConnected = true;
        that.isConnecting = false;
      }).catch(function (error) {
        console.log(error);
        that.isConnected = false;
        that.isConnecting = false;
        that.data = '网络访问失败';
      });
    }
  }
};
// const countOfURL = '0'
// const countOfItem = '0'
//
// export default {
//   countOfURL,
//   countOfItem,
// }


