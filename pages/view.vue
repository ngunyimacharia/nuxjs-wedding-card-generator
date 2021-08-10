<template>
  <div class="w-full text-center">
    <div class="w-full p-10">
      <!-- Front side of card  -->
      <cld-image
        public-id="nuxtjs-image-wedding-invitation/v722-aum-35a"
        crop="fill"
        alt="Wedding card"
        class="m-auto w-1/3"
      >
        <!-- Bride Name -->
        <cld-transformation
          overlay="text:Sacramento_600_normal:Sarah,co_rgb:000000"
          gravity="center"
          y="-1900"
        />

        <!-- And -->
        <cld-transformation
          overlay="text:Roboto_100_normal:AND,co_rgb:000000"
          gravity="center"
          y="-1300"
        />

        <!-- Husband Name -->
        <cld-transformation
          overlay="text:Sacramento_600_normal:John,co_rgb:000000"
          gravity="center"
          y="-700"
        />

        <!-- Invitation Text -->
        <cld-transformation
          overlay="text:Roboto_100_normal:TOGETHER WITH THEIR FAMILIES,co_rgb:000000"
          gravity="center"
        />

        <cld-transformation
          overlay="text:Roboto_100_normal:INVITE YOU TO THEIR WEDDING CELEBRATION,co_rgb:000000"
          gravity="center"
          y="200"
        />

        <!-- Day -->
        <cld-transformation
          overlay="text:Roboto_100_normal:SATURDAY,co_rgb:000000"
          y="800"
          x="-600"
        />

        <!-- Month -->
        <cld-transformation
          overlay="text:Roboto_100_normal:AUG,co_rgb:000000"
          gravity="center"
          y="500"
        />

        <!-- Date -->
        <cld-transformation
          overlay="text:Roboto_100_normal:2022,co_rgb:000000"
          gravity="center"
          y="1100"
        />

        <!-- Year -->
        <cld-transformation
          overlay="text:Roboto_400_normal:17,co_rgb:000000"
          gravity="center"
          y="800"
        />

        <!-- Time -->
        <cld-transformation
          overlay="text:Roboto_100_normal:AT 4 PM,co_rgb:000000"
          y="800"
          x="500"
        />

        <!-- Location  -->
        <cld-transformation
          overlay="text:Roboto_100_normal:LONG ISLAND's . NORTH SHORE,co_rgb:000000"
          y="1500"
        />
        <cld-transformation
          overlay="text:Roboto_100_normal:50 BELLROSE RD . SOUND BEACH . NY,co_rgb:000000"
          y="1700"
        />

        <!-- Reception  -->
        <cld-transformation
          overlay="text:Sacramento_200_normal:reception to follow,co_rgb:000000"
          y="2000"
        />
      </cld-image>
    </div>
    <a href="https://www.freepik.com/vectors/background"
      >Background vector created by freepik - www.freepik.com</a
    >
  </div>
</template>

<script>
export default {
  computed: {
    verticleLineUrl() {
      return "https://cloudinary.nuxtjs.org/logo-light.svg";
      return this.$cloudinary.image.url(
        "nuxtjs-image-wedding-invitation/icons8-vertical-line-80"
      );
    },
  },
};
</script>
