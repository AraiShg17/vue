<template>
  <div class="layout">
    <header class="layout_header">
      <router-link class="layout_header_logo" tag="h1" to="/">Vue Sample List</router-link>

      <nav class="layout_nav">
        <ul class="layout_nav_unit">
          <li class="layout_nav_list">
            <router-link class="layout_nav_link" to="./" exact>
              <span class="layout_nav_link_in">HOME</span>
            </router-link>
          </li>
          <li class="layout_nav_list">
            <router-link class="layout_nav_link" to="./axios">
              <span class="layout_nav_link_in">AXIOS</span>
            </router-link>
          </li>
          <li class="layout_nav_list">
            <router-link class="layout_nav_link" to="./form">
              <span class="layout_nav_link_in">FORM</span>
            </router-link>
          </li>
          <li class="layout_nav_list">
            <router-link class="layout_nav_link" to="./scroll">
              <span class="layout_nav_link_in">SCROLL</span>
            </router-link>
          </li>
          <li class="layout_nav_list">
            <router-link class="layout_nav_link" to="./data">
              <span class="layout_nav_link_in">DATA</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main class="layout_main">
      <slot></slot>
    </main>

    <footer class="layout_footer">
      <small class="layout_footer_copy">© 2018 arai.</small>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.layout{
  display:flex;
  flex-flow:column nowrap;
  min-height: 100vh;

  &_header{
    flex: 0 0 auto;
    display:flex;
    flex-flow:row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;

    &_logo{
      flex: 0 0 auto;
      font-size: 2.2rem;
    }
  }

  &_nav{
    flex: 1 1 auto;
    &_unit {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-end;
    }
    &_list{
      padding: 5px;
      flex: 0 0 auto;
    }
    &_link{
      text-align: center;
      padding: 5px 10px;
      font-size: 1.4rem;
      position: relative;
      color: #50A0F4;

      transition: all .2s ease;

      &_in{
        position: relative;
        z-index: 1;
      }

      &::after{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        transform-origin: right center;
        transform: scale(0,1);
        background-color: #50A0F4;
        transition: transform .2s ease;
      }

      &:hover{
        color: #fff;

        &::after{
          transform-origin: left center;
          transform: scale(1,1);
        }
      }
    }
  }

  &_main{
    flex: 1 1 auto;
    padding: 40px;
    position: relative;
  }

  &_footer{
    flex: 0 0 auto;
    text-align: center;
    padding: 10px;
    &_copy{
      display: inline-block;
      font-size: 1.4rem;
      padding: 10px 30px;
    }
  }
}
@media screen and (max-width: 768px) {
  .layout{

    &_header{
      flex-flow:row wrap;
      padding: 10px 15px;

      &_logo{
        flex: 1 1 100%;
        font-size: 1.8rem;
        text-align: center;
        margin-bottom: 10px;
      }
    }

    &_nav{
      flex: 1 1 100%;
      &_unit {
        flex-flow: row wrap;
        justify-content: flex-start;
      }
      &_list{
        padding: 0 5px 0 0;
        flex: 0 0 auto;
      }
      &_link{
        padding: 5px;
        font-size: 1.2rem;
      }
    }

    &_main{
      padding: 20px 15px;
    }

    &_footer{
      padding: 10px 15px;
      &_copy{
        font-size: 1.2rem;
        padding: 0;
      }
    }
  }
}
</style>
