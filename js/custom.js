new Vue({
  el: "#app",
  delimiters : ['[[',']]'],
  data() {
    return {
      bannerHeight: 0,
      navHeight: 0,
      navFill: false,
      navActive: false,
      teamActive: false
    }
  },
  mounted() {
    this.navHeight = this.$refs.navBlock.clientHeight;
    this.bannerHeight = this.$refs.bannerBlock.clientHeight - this.navHeight;
    
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    clickNav() {
      this.navActive = !this.navActive;
    },
    closeNav() {
      this.navActive = false;
    },
    closeProfile() {
      const el = document.getElementsByClassName('person');

      Object.values(el).map(item => {
        item.classList.remove("profile-active");
        console.log(item);
      });
    },
    showProfile(person) {
      const myEl = this.$refs[person];
      const el = document.getElementsByClassName('person');

      Object.values(el).map(item => {
        item.classList.remove("profile-active");
        console.log(item);
      });

      this.$smoothScroll({
        scrollTo: myEl,
        offset: -100,
        duration: 400,
      });

      setTimeout(() => {
        this.teamActive = true;
        this.$refs[person].classList.value = this.$refs[person].classList.value + ' profile-active';
      }, 350);
      
    },
    onScroll(e) {
      this.windowTop = window.top.scrollY
      
      if ( this.windowTop > this.bannerHeight) {
        this.navFill = true;
      } else {
        this.navFill = false;
      }

      this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    }
  }
})