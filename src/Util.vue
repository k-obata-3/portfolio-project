<script>
import routers from './router.js'

export default {
  methods: {
    handleScroll: function (evt, el) {
      var top = el.getBoundingClientRect().top;
			var scrollY = window.scrollY;
      if (top < scrollY - 50) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -100px, 0)'
        )
      }
    },
    newPage: function(page) {
      var next = routers.options.routes[page];
      if (next.path && this.$route.path !== next.path){
        scrollTo(0, 0);
        this.$router.push(next).catch(
          () => {}
        )
      }
    }
  }
}
</script>
