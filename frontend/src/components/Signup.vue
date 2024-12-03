<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" required>
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" required>
      <button type="submit">Signup</button>
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
    async signup() {
      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: this.username, password: this.password })
        });
        if (!response.ok) throw new Error('Signup failed');
        alert('Signup successful! You can now log in.');
        this.$router.push('/login');
      } catch (error) {
        alert('Signup failed: ' + error.message);
      }
    }
  }
};
</script>
