<template>
  <div class="contacts-container">
    <div class="contacts">
      <h2>Контакты</h2>
      <NUnion :union="'Республика Крым, Симферополь,<br> пер. Футболистов, 5'" color="dark-turquoise" />
      <NCall phone="+7 (3652) 216 501 729" color="dark-turquoise" />
      <NMail mail="novahotel@gmail.com" color="dark-turquoise" />
      <NButton buttonType="button" buttonColor="orange">Позвонить</NButton>
    </div>
    <div class="map">
      <img src="../app/assets/img/map.png">
    </div>
  </div>
</template>
    
<script setup lang="ts">
</script>
  
<style lang="scss" scoped>
.contacts-container {
  display: flex;
  justify-content: space-between;
  padding: 5rem 23rem;

  .map {
    img {
      width: 624px;
      height: 100%;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 48.76px;
      text-align: left;
    }

    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>
        