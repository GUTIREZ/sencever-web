<template>
  <div class="animated fadeIn">
    Role: {{role}}
    <!-- firstName: {{person.firstname}} -->
    <!-- <v-for person in persons>
      {{ person.message }}
    </v-for> -->

    <!-- <ul>
      <li v-for='item in persons'>
        {{ item.name }}
      </li>
    </ul>

    <tr v-for="uitem in persons">  
      <td>{{uitem.name}}</td>  
      <td>{{uitem.status}}</td>  
      <td>{{uitem.role}}</td>  
      <td style="width: 200px">  
        <a href="#" >更新</a>  
        <a href="#" >删除</a>  
        <a href="#" >分享</a>  
      </td>  
    </tr> -->

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
        <tbody v-for="(item, index) in persons">
          <tr>
              <td>{{index+1}}</td>
              <td>{{item.name}}</td>
              <td>{{item.role}}</td>
              <td>
                <!-- <span  class="badge badge-success">
                  {{item.status}}
                </span> -->
                <span  v-bind:class="{ 'badge badge-success': item.status === 'Active', 'badge badge-secondary': item.status === 'Inactive', 'badge badge-warning': item.status === 'Pending'  }">
                  {{item.status}}
                </span>
              </td>
          </tr>
        </tbody>
      </table>
      <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Prev</a></li>
          <li class="page-item active">
          <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </div>

    <div class="col-sm-12">
      <b-form-fieldset>
        <b-button type="submit" size="sm" variant="primary" v-on:click="getPersons"><i class="fa fa-dot-circle-o"></i> 查询</b-button>
      </b-form-fieldset>
  </div>
  </div>
</template>

<script>
// import http from '@/utils/http'
import axios from 'axios'
export default {
  name: 'role',
  data () {
    return {
      role: 'Admin',
      status: 'Active',
      person: {firstname: 'John', lastname: 'Doe', age: 50, eyecolor: 'blue'},
      // persons: [{id: 1, name: 'John', status: 'Active', role: 'Admin'}, {id: 2, name: 'Snow', status: 'Pending', role: 'Starff'}, {id: 3, name: 'Henry', status: 'Inactive', role: 'Member'}]
      persons: []
    }
  },
  methods: {
    reset: function () {
      this.role = 'Member'
      this.persons = []
    },
    getPersons: function () {
      const that = this

      axios.get('http://localhost:8082/user/listAll', {
        params: {
          ID: 12345
        }
      }).then(function (response) {
        // console.log(response.data.data)
        that.persons = response.data.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  created: function () {
    console.info('组建已加载完成')
    this.getPersons()
  }
}
</script>
