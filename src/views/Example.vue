<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12">
        <b-card>
          <div slot="header">
            <strong>From</strong>
          </div>
          <b-form-fieldset class="col-sm-5" description="your full name." label="Name" :label-cols="2" :horizontal="true">
            <b-form-input type="text" v-model.trim="name"></b-form-input>
            <p>reverse name: {{reversedName}}</p>
          </b-form-fieldset>
          <b-form-fieldset class="col-sm-5" description="your age." label="age" :label-cols="2" :horizontal="true">
            <b-form-input type="number" v-model.number="age" placeholder="请输入数字"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset class="col-sm-5" label="Static" :label-cols="2" :horizontal="true">
            <b-form-input-static type="text" value="this is a static text"></b-form-input-static>
          </b-form-fieldset>
          <b-form-fieldset class="col-sm-5" label="Role" :label-cols="2" :horizontal="true">
            <b-form-select :plain="true" :options="[{
                            text: '请选择',
                            value: 'd',
                            disabled: true
                            } ,
                            'Admin','Member', 'Staff']" value="d" v-model="role">
              <!-- 如果 v-model 表达式的初始值未能匹配任何选项，
                            <select> 元素将被渲染为“未选中”状态。在 iOS 中，
                            这会使用户无法选择第一个选项。因为这样的情况下，
                            iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。 
                        -->
            </b-form-select>
          </b-form-fieldset>
          <div class="col-sm-12" align="right" slot="footer">
            <b-button type="submit" size="sm" variant="primary" @click="createPersion">
              <i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger" @click="reset">
              <i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </div>
      <div class="col-sm-12">
        <b-card>
          <div slot="header">
            <strong>Table</strong>
          </div>
          <div class="col-sm-12">
            <b-form-fieldset>
              <b-input-group>
                <b-input-group-button slot="left">
                  <b-dropdown text="Split" variant="primary" split>
                    <b-dropdown-item href="#">name</b-dropdown-item>
                    <b-dropdown-item href="#">role</b-dropdown-item>
                    <b-dropdown-item href="#">status</b-dropdown-item>
                  </b-dropdown>
                </b-input-group-button>
                <b-form-input v-model="searchText" placeholder="请输入查询条件"></b-form-input>
                <b-button type="query" size="sm" variant="primary" @click="getPersons()">
                  <i class="fa fa-dot-circle-o"></i> 查询</b-button>
                <b-button type="create" size="sm" variant="primary">
                  <i class="fa fa-dot-circle-o"></i> 新增</b-button>
              </b-input-group>
            </b-form-fieldset>
          </div>
          <div class="col-12">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <!-- <tbody v-for="(item, index) in persons"> -->
              <tbody v-for="(item,index) in persons" :key="item.id">
                <tr>
                  <td>{{index+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.role}}</td>
                  <td>
                    <!-- <span  class="badge badge-success">
                                    {{item.status}}
                                    </span> -->
                    <span v-bind:class="{ 'badge badge-success': item.status === 'Active', 'badge badge-secondary': item.status === 'Inactive', 'badge badge-warning': item.status === 'Pending'  }">
                      {{item.status}}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">Prev</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-10" align="right" slot="footer">

          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  // import qs from 'qs'
  export default {
    name: 'example',
    data () {
      return {
        name: 'aa',
        age: null,
        role: null,
        searchTag: null,
        searchText: null,
        person: {},
        persons: []
      }
    },
    methods: {
      reset: function () {
        // const that = this
        console.info('name:' + this.name)
        this.name = null
        console.info('name:' + this.name)
        //   this.age = null
        //   this.role = null
        //   var txts = document.getElementsByTagName('input')
        //   for (var i = 0; i < txts.length; i++) {
        //     if (txts[i].type === 'text' || txts[i].type === 'checkbox') {
        //       txts[i].value = ''
        //     }
        //   }
      },
      getPersons: function () {
        const that = this
        var url = 'http://localhost:8082/user/listAll/' + this.searchText
        console.info('url:' + url)
        axios.get('http://localhost:8082/user/listAll/' + this.searchText, {
          // params: {
          //   a: that.searchText
          // }
        }).then(function (response) {
          // 处理数据
          that.persons = response.data.data
        }).catch(function (error) {
          console.log(error)
        })
      },
      createPersion: function () {
        const that = this
        axios({
          method: 'post',
          url: 'http://localhost:8082/user/create/',
          data: {
            name: this.name,
            age: this.age,
            role: this.role
          }
        }).then((response) => {
          console.log(response.data.data)
          // that.persons.splice(response.data.data)
          that.person.unshift(response.data.data)
          // fruits.splice(2,0,"Lemon","Kiwi");
        })
        // const that = this
        //  axios.post('http://localhost:8082/user/create/', qs.stringify({name: this.name, age: this.age, role: this.role}))
        //   axios.post('http://localhost:8082/user/create/', {
        //     data: {
        //       name: this.name,
        //       age: this.age,
        //       role: this.role
        //     }
        //   }).then(function (response) {
        //     // 处理数据
        //     that.persons = response.data.data
        //   }).catch(function (error) {
        //     console.log(error)
        //   })
      }
    },
    created: function () {
      // 在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
      // this.getPersons(JSON.stringify(this.searchText))
    },
    mounted: function () {
      console.info('模板渲染完成')
      // 在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
      // mounted通常是在一些插件的使用或者组件的使用中进行操作
    },
    watch: {
      // 当需要在数据变化时执行异步或开销较大的操作时，可以使用watch侦听数据的变化
      'name': function (newValue, oldValue) {
        console.info(newValue + '-' + oldValue)
      }
    },
    computed: {
      // 减少模版内的逻辑，当需要进行复杂逻辑处理时，都应当使用计算属性
      reversedName: function () {
        return this.name.split('').reverse().join('')
      }
    }
  }
</script>
