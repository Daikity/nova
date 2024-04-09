<template>  
  <header>
    <div class="contacts-container">
      <div class="contacts">
        <NUnion :union="'Республика Крым, Симферополь, <br> пер. Футболистов, 5'" color="orange" />
      </div>
      <div class="contacts">
        <NCall phone="+7 (3652) 216 501 729" color="orange" />
        <NMail mail="novahotel@gmail.com" color="orange" />
      </div>
    </div>
    <div class="logo">
      <img src="../app/assets/logo.svg">
    </div>
  </header>
  <main>
    <NRoom />
    <NAboutUs />
    <NContacts />
  </main>
  <footer>
    <div>
      <img src="../app/assets/logo.svg">
    </div>
    <span>2024, Все права защищены</span>
    <span>AZAT.TEAM</span>
  </footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
header {
  background: var(--main-dark-turquoise);
  flex-direction: column;
  display: flex;
  gap: 3rem;
  height: 600px;
  width: 100%;

  .contacts-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 21.5rem;

    .contacts {
      max-width: 250px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
footer {
  height: 176px;
  background: var(--footer-dark-turquoise);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 21.5rem;
  span {
    color: var(--main-light-orange);
    font-size: 20px;
    font-weight: 500;
    line-height: 24.38px;
    text-align: left;
  }

  img {
    width: 179px;
  }
}
</style>
