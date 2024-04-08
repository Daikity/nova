<template>
<div class="about-us">
  <div class="logo">
    <img src="../app/assets/logo.svg">
  </div>
  <h3>О нас</h3>
  <div class="about">
    <p>Мы — команда энтузиастов, создавшая уютное и гостеприимное место для путешественников из разных уголков мира. Мы стремимся предоставить не просто место для ночлега, а настоящий опыт, запоминающийся своей атмосферой и гостеприимством.</p>
    <p>Наш хостел расположен в сердце города, в нескольких минутах ходьбы от главных достопримечательностей. Мы предлагаем разнообразные комфортабельные номера, оборудованные всем необходимым для приятного пребывания. У нас вы найдёте просторные общие зоны, где можно пообщаться с другими путешественниками, а также уютные уголки для уединения.</p>
    <p>Наша команда состоит из опытных профессионалов, готовых помочь вам в любых вопросах и сделать ваше пребывание максимально комфортным. Мы уделяем особое внимание чистоте и порядку, чтобы вы чувствовали себя как дома.</p>
  </div>
  <NButton buttonColor="orange" buttonType="button" @click="sendReview">Смотреть отзывы</NButton>
</div>
</template>

<script setup lang="ts">
const sendReview = () => {
  console.log('sendReview');
}
</script>

<style lang="scss" scoped>
.about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 21.5rem;
  gap: 50px;
  background: var(--main-dark-turquoise);
  position: relative;
  
  .logo {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      opacity: 10%;
      width: 50%;
    }
  }

  h3 {
    font-size: 40px;
    font-weight: 700;
    line-height: 48.76px;
    text-align: left;
    color: var(--main-light-orange);
  }
  .about {
    display: flex;
    flex-direction: column;
    gap: 20px;
    p {
      font-size: 20px;
      font-weight: 500;
      line-height: 24.38px;
      text-align: left;
      color: var(--main-light-orange);
    }
  }
}
</style>
              
              