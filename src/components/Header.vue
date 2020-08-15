<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <img src="@/assets/header-logo@3x.png" alt="logo">
        </div>
        <div class="col-sm">
          <ul class="nav text-header">
            <li class="nav-item">
              <a class="nav-link active" href="#">DOGS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CONTACT US</a>
            </li>
            <li class="nav-item">
              <Icon iconSize="19" iconName="united-arab-emirates"/>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-primary">Primary</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  header img {
    width: 150px;
    height: 56px;
  }

  .text-header a{
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    font-weight: bold;
    color: #6B1D57;
  }

</style>