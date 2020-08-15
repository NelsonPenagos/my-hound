<template>
  <div class="card " style="width: 275px;">    
    <div class="card-body">
      <div class="date-pet">
        <span> Thursday 12 Dec 2019 - 15:10</span>
      </div>
      <img :src="image" class="image-pet" height="208px" width="261px" alt="dog">
      <div class="container-info">      
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><span class="title-pet">{{breed}}</span> <span class="year-pet">2019</span></li>
          <li class="list-group-item">
            <div class="container-views">
              <Icon style="" iconSize="15" iconName="visible"/>
              <span class="views-pet">7,732 views</span>
            </div>
          </li>
          <li class="list-group-item">
            <div class="container">
              <div class="row">
              <div class="col-sm-4"><Icon style="" iconSize="20" iconName="pin"/></div>
              <div class="col-sm-8">
                <span class="title-location">Location</span><br>
                <span class="name-location">Riyadh Yard, Saudi Arabia</span>
              </div>
            </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="container">
              <div class="row row-cols-4">
                <div class="col">
                  <Icon style="" iconSize="19" iconName="law"/>
                </div>
                <div class="col">
                  <span class="title-sold">Sold for</span><br>
                  <div class="name-sold">23,911<span class="badge-pet">SAR</span></div>
                </div>
                <div class="col">
                  <Icon style="" iconSize="19" iconName="money"/>
                </div>
                <div class="col">
                  <span class="title-buy">Buy Now</span><br>
                  <div class="name-sold">23,911<span class="badge-pet">SAR</span></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="bottom-pet">
        <span> View 3 Bids</span>
      </div>
    </div>    
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  props: ['breed','image'],
  components: {
    Icon
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap');

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0px solid rgba(0,0,0,.125)!important;
    border-radius: 0.25rem;
  }
  .card-body {
    flex: 1 1 auto !important;
    min-height: 1px !important;
    padding: 0.25rem !important;
  }
  .list-group-item {
    position: relative !important;
    display: block !important;
    padding: 0.75rem 0.25rem !important;
    background-color: #fff !important;
  }
  .container-info {
    padding: 0 10px 0 10px;
  }
  .container-lo{
    display:flex;
  }
  .element-lo{
    width:50%;
  }
  .title-pet{
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: bold;
    color: #45454D;
  }
  .year-pet{
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    margin-left: 126px;
  }
  .views-pet{
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    padding: 0px 0px 0px 11px;
  }
  .bottom-pet{
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    color: #ffffff;
    height: 28px;
    font-size: 11px;
    border-radius: 3px;
    background: rgba(143,185,70,1);
  }
  .container-views{
    margin-left: 134px;
  }
  .image-pet {
    width: 261px;
    border-radius: 0px 0px 15px 15px;
    padding: 8px 0 0 0;
  }
  .title-location{
    font-family: 'Poppins', sans-serif;
    color: #989898;
    font-size: 11px;
    margin-left: -52px;
  }
  .title-sold{
    font-family: 'Poppins', sans-serif;
    color: #989898;
    font-size: 11px;
    margin-left: -39px;
  }
  .title-buy{
    font-family: 'Poppins', sans-serif;
    color: #989898;
    font-size: 11px;
    margin-left: -43px;
  }
  .name-location{
    font-family: 'Roboto', sans-serif;
    color: #45454D;
    font-size: 16px;
    font-weight: bold;
    margin-left: -53px;
  }
  .name-sold{
    font-family: 'Roboto', sans-serif;
    color: #45454D;
    font-size: 14px;
    font-weight: bold;
    margin-left: -39px;
  }
  .name-buy{
    font-family: 'Roboto', sans-serif;
    color: #45454D;
    font-size: 14px;
    font-weight: bold;
    margin-left: -43px;
  }
  .container svg {
    margin-left: -11px;
    margin-top: 17px;
  }
  .date-pet span{
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    color: #ffffff;
    height: 28px;
    font-size: 11px;
    border-radius: 3px;
    background: rgba(231,48,84,1);
  }
  .badge-pet{
    font-family: 'Roboto', sans-serif;
    color: #8FB946;
    font-size: 12px;
  }
  .list-group-item{
    border: 1px solid #44444414;
  }
  .law-pet{
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }

</style>