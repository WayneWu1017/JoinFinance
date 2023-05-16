<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
    </div>
    <button type="submit">Login</button>
    </form>
  </div>
</template>
  
  <script type="module">
  import axios from 'axios';
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('/login', {
            email: this.email,
            password: this.password
          });
          localStorage.setItem('token', response.data.token);
          // redirect to home page
        } catch (error) {
          console.error(error);
          // display error message to user
        }
      }
    }
  };
  </script>
  