<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" required>
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: this.username, password: this.password })
        });
        if (!response.ok) throw new Error('Login failed');
        const token = await response.text();
        localStorage.setItem('token', token);
        this.$router.push('/dashboard');
      } catch (error) {
        alert('Login failed: ' + error.message);
      }
    }
  }
};
</script>
