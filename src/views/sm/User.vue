<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="clo-md-12">
                <b-input-group>
                    <b-input-group-button slot="left">
                        <b-dropdown text="Acccc" variant="primary">
                            <b-dropdown-item disabled>用户名</b-dropdown-item>
                            <b-dropdown-item>用户ID</b-dropdown-item>
                            <b-dropdown-item>状态</b-dropdown-item>
                        </b-dropdown>
                    </b-input-group-button>
                    <b-form-input placeholder="Username"></b-form-input>
                    <b-button variant="primary">查询</b-button>
                    <b-button variant="success">新建</b-button>
                </b-input-group>
            </div>
        </div>
        <div class="row">
            <table class="table">
                <thead class="thead-inverse">
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'user'
}
</script>
