<template>
  <main>
    <div id="dashboard">
        <div class="container">
            <ul class="collection with-header">
                <li class="collection-header"><h2>Employee List</h2></li>
                <li v-for="employee in employees" v-bind:key="employee.id" class="collection-item">
                    <div><h5>{{employee.dept}}</h5></div>
                    <br>
                    <p>{{employee.employee_id}}: {{employee.name}}</p>
                    <router-link class="secondary-content" v-bind:to="{name: 'view-employee', params: {employee_id: employee.employee_id}}">
                        <i class="fa fa-eye" style="color: #9e9e9e !important;font-size: 2rem;"></i>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating waves-effect btn-large green lighten-2">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
  </main>
</template>

<script>
    import db from './firebaseInit'
    export default {
        name: 'dashboard',
        data () {
            return {
                employees: []

            }
        },
        created () {
            db.collection('Employee').orderBy('dept').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'id': doc.id,
                        'employee_id': doc.data().employee_id,
                        'name': doc.data().name,
                        'dept': doc.data().dept,
                        'position': doc.data().position
                    }
                    this.employees.push(data)
                })
            })
        }
    }
</script>

<style scoped>
    ul {
        margin: 4rem 0;
    }

    p {
        display: inline;
    }

    .chip {
        display: block;
    }
</style>
