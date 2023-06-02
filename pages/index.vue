<template>
  <v-row no-gutters class="pb-2">
    <v-col cols="1">
      <v-row no-gutters align-content="center" justify="center">
        <v-img src="avatar.png" width="50" alt="Islati"></v-img>
      </v-row>
      <v-row no-gutters align-content="center" justify="center">
        <v-chip label size="small" class="mt-2"><h4 class="text-white">About</h4></v-chip>
      </v-row>

    </v-col>
    <v-col cols="8" class="ml-3 mt-2">
      <v-row>
        <v-col cols="12">
          <h2 class="font-weight-light">Islati Sk</h2>
          <p class="text-white font-weight-light mt-2">> Educated & passionate software engineer with a proven
            track record. It started at 13 when I taught myself how to code.</p>
        </v-col>
        <v-col cols="4">
          <ul class="ml-5 ul-simple">
            <li>
              <v-icon size="sm" class="mr-1">mdi-house</v-icon>
              Newfoundlander
            </li>
            <li>
              <v-icon size="sm" class="mr-1">mdi-cat</v-icon>
              Cat Daddy
            </li>
            <li>
              <v-icon size="sm" class="mr-1">mdi-gamepad-variant-outline</v-icon>
              Indie Developer
            </li>
          </ul>
        </v-col>
        <v-col cols="4">
          <ul class="ml-2 ul-simple">
            <li>
              <v-icon size="sm" class="mr-1">mdi-music-circle</v-icon>
              Hip Hop Artist
            </li>
            <li>
              <v-icon size="sm" class="mr-1">mdi-robot-excited</v-icon>
              Automated my social media
            </li>
            <li>
              <v-icon size="sm" class="mr-1">mdi-heart-circle</v-icon>
              Loves to Code
            </li>
          </ul>
        </v-col>
        <v-col cols="4">
          <ul class="ml-2 ul-simple">
            <li>
              <v-icon size="sm" class="mr-1">mdi-weight-lifter</v-icon>
              Fitness Enthusiast
            </li>
            <li>
              <v-icon size="sm" class="mr-1">mdi-book-open-variant</v-icon>
              Bookworm
            </li>
            <li>
              <v-icon size="sm" class="mr-1">mdi-school</v-icon>
              Constantly Learning
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <v-row align-content="center" justify="center" class="mt-2 mb-2">
    <v-col cols="2">
      <v-btn href="https://github.com/Islati" target="_blank" density="compact" class="bg-grey-darken-4 text-white" prepend-icon="mdi-github">GitHub</v-btn>
    </v-col>

    <v-col cols="2">
      <v-btn href="https://www.linkedin.com/in/islati-sk-2108b6224/" target="_blank" density="compact" class="bg-blue text-white" prepend-icon="mdi-linkedin">LinkedIn</v-btn>
    </v-col>
  </v-row>

  <v-row align-content="center" justify="center" class="mb-2 mt-5" no-gutters>
    <v-col cols="3">
      <h4>Projects</h4>
    </v-col>
  </v-row>
  <!--  Projects History -->
  <v-row no-gutters>
    <v-col cols="3">
      <v-card>

        <v-img src="ecor-rouge.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">Ecor Rouge</h4>
          <p class="mb-3">An administrative dashboard to orchestrate
            multiple micro-services supporting their business.</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>Flask</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Python</v-chip>
            </v-col>

            <v-col cols="4">
              <v-chip>MySQL</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Nuxt3</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Docker</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>RabbitMQ</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>AWS</v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2" href="http://ecorrouge.com" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" offset="1">
      <v-card>
        <v-img src="clear-calcs.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">ClearCalcs</h4>
          <p class="mb-3">Digitized docs for Civil Engineers, as a world first. </p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>FastAPI</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Python</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Strapi</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Next.js</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Docker</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Redis</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>AWS</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Ruby</v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2" href="http://clearcalcs.com" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" offset="1">
      <v-card>
        <v-img src="jobninja.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">JobNinja</h4>
          <p class="mb-3">Leading Job Board in Germany.</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>Flask</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Python</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Bootstrap</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Vue.js</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Docker</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Redis</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Heroku</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>AWS</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Pandas</v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2" href="http://jobninja.com" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>


  </v-row>

  <v-row no-gutters class="mt-2">
    <v-col cols="3">
      <v-card>
        <v-img src="dreammine.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">DreamMine, by Rubes Soft</h4>
          <p class="mb-3">NFT Idle Mobile Game by #1 Game Making Company.</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>Flask</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Python</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Vue.js</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Solidity</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Python</v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2" href="https://www.upwork.com/freelancers/islati" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" offset="1" class="mt-3">
      <v-card>
        <v-img src="tehama.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">Tehama</h4>
          <p class="mb-3">Cybersecurity SaaS (DaaS) Platform for
            Hybrid and Remote Work</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>React.js</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Python</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>AWS</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Node.js</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>
                Docker
              </v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2" href="https://www.tehama.io" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" offset="1" class="mt-3">
      <v-card>
        <v-img src="simptek.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">Simptek</h4>
          <p class="mb-3">Powering the
            Grid Edge Economy</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>React.js</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Python</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>AWS</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Node.js</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>
                Docker
              </v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>
                Express
              </v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>
                Web3
              </v-chip>
            </v-col>

            <v-col cols="4" class="mt-2">
              <v-chip>
                Solidity
              </v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2" href="https://www.tehama.io" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" class="mt-3">
      <v-card>
        <v-img src="cubecraft.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">CubeCraft</h4>
          <p class="mb-3">Microsoft Sponsored Minecraft Studio</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>Java</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Spigot</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Nukkit</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Node.js</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>
                Redis
              </v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2" href="https://www.cubecraft.net" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" offset="1" class="mt-3">
      <v-card>
        <v-img src="intertek.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">Ingrid - Intertek</h4>
          <p class="mb-3">Worlds largest wind turbine database.</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>Flask</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Python</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Pandas</v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2" href="https://www.intertek.com" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" offset="1" class="mt-3">
      <v-card>
        <v-img src="cibowares.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">CiboWares - Wholesaler</h4>
          <p class="mb-3">Restaurant Wholesaler on Multiple Platforms.</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>Xamarin</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>C#</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>React.js</v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2" href="https://www.cibowares.com" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" class="mt-3">
      <v-card>
        <v-img src="gamelynx.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">GameLynx - Leaderboards</h4>
          <p class="mb-3">Startup Company with SaaS Leaderboards for Niche Gaming.</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>Django</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Python</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Bootstrap</v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2"
                 href="https://web.archive.org/web/20140331075054/http://www.gamelynx.net/" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" offset="1" class="mt-3">
      <v-card>
        <v-img src="saico.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">Saico Gaming</h4>
          <p class="mb-3">Independent Game Studio</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>Java</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Bukkit</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Bootstrap</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>
                Redis
              </v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2" href="https://web.archive.org/web/20150813094500/http://saicogaming.com/"
                 target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="3" offset="1" class="mt-3">
      <v-card>
        <v-img src="mdt.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">Monkey Data Technologies</h4>
          <p class="mb-3">Charlottetown Development Studio</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>Python</v-chip>
            </v-col>
            <v-col cols="6">
              <v-chip>React Native</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Bootstrap</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>
                Redis
              </v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>
                AWS
              </v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2"
                 href="https://web.archive.org/web/20200814172454/https://www.monkeydatatech.com/" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" class="mt-3">
      <v-card>
        <v-img src="dover.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">Dover Digital Design</h4>
          <p class="mb-3">Charlottetown Development Studio</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>Python</v-chip>
            </v-col>
            <v-col cols="6">
              <v-chip>React Native</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Bootstrap</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>
                Redis
              </v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>
                Heroku
              </v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2"
                 href="https://web.archive.org/web/20200811191852/https://www.doverdigitaldesign.ca/" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" offset="1" class="mt-3">
      <v-card>
        <v-img src="sayfriends.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">SayFriends</h4>
          <p class="mb-3">UK Startup - Child Friendly Social Network</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>Java</v-chip>
            </v-col>
            <v-col cols="6">
              <v-chip>Spring Boot</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Python</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>React.js</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>Bootstrap</v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2"
                 href="https://web.archive.org/web/20160626121736/http://www.sayfriends.com/" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" offset="1" class="mt-3">
      <v-card>
        <v-img src="artectis.png" cover class="text-white"></v-img>
        <v-card-text class="text--primary text-center">
          <h4 class="font-weight-thin">Artectis</h4>
          <p class="mb-3">IT Consultancy</p>

          <v-row no-gutters align-content="center" justify="center">
            <v-col cols="4">
              <v-chip>Python</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Flask</v-chip>
            </v-col>
            <v-col cols="4">
              <v-chip>Bootstrap</v-chip>
            </v-col>
            <v-col cols="4" class="mt-2">
              <v-chip>React.js</v-chip>
            </v-col>
          </v-row>

          <v-divider class="mt-2"/>
          <v-btn color="purple-lighten-1 mt-2"
                 href="https://web.archive.org/web/20160720145628/http://artectis.com/" target="_blank">
            Visit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>



  </v-row>
</template>

<script setup lang="ts">

onMounted(() => {
  //Perform a request for the data on mount
});
</script>

<style scoped>
.ul-simple {
  list-style-type: none;
}

</style>
