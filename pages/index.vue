<script setup lang="ts">
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="4" class="d-flex flex-column align-center">
        <v-img class="rounded-sm" max-width="150px" src="avatar.png" alt="Islati"></v-img>
        <h1 class="font-weight-medium text-white mt-2">Islati Sk</h1>
        <v-chip label size="small" class="ma-2 text-orange-accent-1">Full-Stack Software Engineer</v-chip>
        <v-chip size="small" label class="ma-2 text-green-accent-1">Music Producer</v-chip>
      </v-col>
      <v-col cols="12" sm="8" class="mt-3 mt-sm-0">
        <v-row class="d-flex flex-row align-center justify-center">
          <v-col cols="2">
            <v-chip href="https://github.com/Islati" label target="_blank" size="small"
                    class="bg-grey-darken-4 text-white ma-2">
              <v-icon class="mr-1">mdi-github</v-icon>
              <span>GitHub</span>
            </v-chip>
          </v-col>
          <v-col cols="2">
            <v-chip label href="https://www.linkedin.com/in/islati-sk-2108b6224/" target="_blank" size="small"
                    class="bg-blue text-white ma-2">
              <v-icon class="mr-1">mdi-linkedin</v-icon>
              <span>LinkedIn</span>
            </v-chip>
          </v-col>
          <v-col cols="1" class="text-center">
            <span>♬</span>
          </v-col>
          <v-col cols="2">

            <v-chip label href="http://www.youtube.com/c/Islati" target="_blank" size="small"
                    class="bg-red text-white ma-2">
              <v-icon class="mr-1">mdi-youtube</v-icon>
              <span>YouTube</span>
            </v-chip>
          </v-col>
          <v-col cols="2">

            <v-chip label href="https://open.spotify.com/artist/1kxPoYW6CuTlFE3b3xwSxR" target="_blank" size="small"
                    class="bg-green text-white ma-2">
              <v-icon class="mr-1">mdi-spotify</v-icon>
              <span>Spotify</span>
            </v-chip>
          </v-col>
        </v-row>


        <v-row>
          <v-col cols="12" class="text-center">
            <p class="about-text">
              Passion is my drive, with accomplishment the motive. I've been building software since 2008- Went to
              college in 2012 while freelancing to support myself.
            </p>
          </v-col>
          <v-col cols="12" class="text-center">
            <p class="about-text">
              In my free time I'm heavily focused on creating music with my family. We love the community, and have been
              blessed to have quite a few opportunities in performing with many more on the horizons.
            </p>
          </v-col>

          <v-col cols="12" class="text-center">
            Communication is key.
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row align-content="center" justify="center" class="mb-2 mt-5">
      <v-col cols="12" sm="12" md="4" align-self="center" class="text-center">
        <h4>Projects</h4>
      </v-col>
    </v-row>

    <!--  Projects History -->
    <v-row align-content="center" justify="center">
      <v-col cols="12" md="4">
        <v-card>

          <v-img src="glacier.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">Glacier Digital</h4>
            <p class="mb-3">Coorporate development firm focused on AODA Compliance and Accessibility</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-csharp</v-icon>
                <span class="overflow-visible w-auto">
                  C#
                </span>
              </v-chip>

              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-html5</v-icon>
                <span class="overflow-visible w-auto">
                  HTML5
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-bootstrap</v-icon>
                <span class="overflow-visible w-auto">
                  Bootstrap
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-sass</v-icon>
                <span class="overflow-visible w-auto">
                  SCSS
                </span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2" href="https://www.glacierdigital.com/" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>

          <v-img src="ecor-rouge.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">Ecor Rouge</h4>
            <p class="mb-3">An administrative dashboard to orchestrate
              multiple micro-services supporting their business.</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-python</v-icon>
                <span class="overflow-visible w-auto">
                  Flask
                </span>
              </v-chip>

              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-database</v-icon>
                <span class="overflow-visible w-auto">
                  MySQL
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-vuejs</v-icon>
                <span class="overflow-visible w-auto">
                  Nuxt 3
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-docker</v-icon>
                <span class="overflow-visible w-auto">
                  Docker
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-quality-medium</v-icon>
                <span class="overflow-visible w-auto">
                  Redis
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-aws</v-icon>
                <span class="overflow-visible w-auto">
                  AWS
                </span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2" href="https://ecorrouge.com" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="clear-calcs.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">ClearCalcs</h4>
            <p class="mb-3">Digitized docs for Civil Engineers, as a world first. </p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-python</v-icon>
                <span class="overflow-visible w-auto">
                  Fast API
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-react</v-icon>
                <span class="overflow-visible w-auto">
                  Next.js
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-docker</v-icon>
                <span class="overflow-visible w-auto">
                  Docker
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-quality-medium</v-icon>
                <span class="overflow-visible w-auto">
                  Redis
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-aws</v-icon>
                <span class="overflow-visible w-auto">
                  AWS
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-ruby-on-rails</v-icon>
                <span class="overflow-visible w-auto">
                  Ruby on Rails
                </span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2" href="http://clearcalcs.com" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="jobninja.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">JobNinja</h4>
            <p class="mb-3">Leading Job Board in Germany.</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-python</v-icon>
                <span class="overflow-visible w-auto">
                  Flask
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-bootstrap</v-icon>
                <span class="overflow-visible w-auto">
                  Bootstrap
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-vuejs</v-icon>
                <span class="overflow-visible w-auto">
                  Vue
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-docker</v-icon>
                <span class="overflow-visible w-auto">
                  Docker
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-quality-medium</v-icon>
                <span class="overflow-visible w-auto">
                  Redis
                </span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2" href="http://jobninja.com" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="dreammine.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">DreamMine, by Rubes Soft</h4>
            <p class="mb-3">NFT Idle Mobile Game by #1 Game Making Company.</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-col cols="12">
                <v-chip class="w-auto overflow-visible ma-2">
                  <v-icon class="mr-1">mdi-language-python</v-icon>
                  <span>Flask</span>
                </v-chip>
                <v-chip class="w-auto overflow-visible">
                  <v-icon class="mr-1">mdi-vuejs</v-icon>
                  <span>Vue.js</span>
                </v-chip>
                <v-chip class="w-auto overflow-visible ma-2">
                  <v-icon class="mr-1">mdi-ethereum</v-icon>
                  <span>
                  Solidity
                </span>
                </v-chip>
              </v-col>

            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2" href="https://www.upwork.com/freelancers/islati" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="tehama.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">Tehama</h4>
            <p class="mb-3">Cybersecurity SaaS (DaaS) Platform for
              Hybrid and Remote Work</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-react</v-icon>
                <span>React</span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-python</v-icon>
                <span>Python</span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-aws</v-icon>
                <span>AWS</span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-nodejs</v-icon>
                <span>Node</span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-docker</v-icon>
                <span>Docker</span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2" href="https://www.tehama.io" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="simptek.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">Simptek</h4>
            <p class="mb-3">Powering the
              Grid Edge Economy</p>

            <v-row class="d-flex align-center justify-center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-python</v-icon>
                <span>Python</span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-react</v-icon>
                <span>React</span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-aws</v-icon>
                <span>
                  AWS
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-nodejs</v-icon>
                <span>Node.js</span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-docker</v-icon>
                <span>Docker</span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-ethereum</v-icon>
                <span>
                  Solidity
                </span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2" href="https://www.tehama.io" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="cubecraft.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">CubeCraft</h4>
            <p class="mb-3">Microsoft Sponsored Minecraft Studio</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-java</v-icon>
                <span class="overflow-visible w-auto">
                  Java
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-nodejs</v-icon>
                <span>Node</span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-quality-medium</v-icon>
                <span class="overflow-visible w-auto">
                  Redis
                </span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2" href="https://www.cubecraft.net" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="intertek.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">Ingrid - Intertek</h4>
            <p class="mb-3">Worlds largest wind turbine database.</p>

            <v-row align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-python</v-icon>
                <span>Flask</span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">
                  mdi-bootstrap
                </v-icon>
                <span>Bootstrap</span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2" href="https://www.intertek.com" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="cibowares.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">CiboWares - Wholesaler</h4>
            <p class="mb-3">Restaurant Wholesaler on Multiple Platforms.</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-xamarin</v-icon>
                <span class="overflow-visible w-auto">
                  Xamarin
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-csharp</v-icon>
                <span class="overflow-visible w-auto">
                  C#
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-react</v-icon>
                <span>React</span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2" href="https://www.cibowares.com" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="gamelynx.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">GameLynx - Leaderboards</h4>
            <p class="mb-3">Startup Company with SaaS Leaderboards for Niche Gaming.</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-python</v-icon>
                <span class="overflow-visible w-auto">
                  Django
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-bootstrap</v-icon>
                <span class="overflow-visible w-auto">
                  Bootstrap
                </span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2"
                   href="https://web.archive.org/web/20140331075054/http://www.gamelynx.net/" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="saico.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">Saico Gaming</h4>
            <p class="mb-3">Independent Game Studio</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-java</v-icon>
                <span class="overflow-visible w-auto">
                  Java
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-bootstrap</v-icon>
                <span class="overflow-visible w-auto">
                  Bootstrap
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-quality-medium</v-icon>
                <span class="overflow-visible w-auto">
                  Redis
                </span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2"
                   href="https://web.archive.org/web/20150813094500/http://saicogaming.com/"
                   target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="mdt.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">Monkey Data Technologies</h4>
            <p class="mb-3">Charlottetown Development Studio</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-python</v-icon>
                <span class="overflow-visible w-auto">
                  Python
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-react</v-icon>
                <span class="overflow-visible w-auto">
                  React Native
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-bootstrap</v-icon>
                <span class="overflow-visible w-auto">
                  Bootstrap
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-quality-medium</v-icon>
                <span class="overflow-visible w-auto">
                  Redis
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-aws</v-icon>
                <span class="overflow-visible w-auto">
                  AWS
                </span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2"
                   href="https://web.archive.org/web/20200814172454/https://www.monkeydatatech.com/" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>
          <v-img src="dover.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">Dover Digital Design</h4>
            <p class="mb-3">Charlottetown Development Studio</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-python</v-icon>
                <span class="overflow-visible w-auto">
                  Flask
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-react</v-icon>
                <span class="overflow-visible w-auto">
                  React Native
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-bootstrap</v-icon>
                <span class="overflow-visible w-auto">
                  Bootstrap
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-quality-medium</v-icon>
                <span class="overflow-visible w-auto">
                  Redis
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-ghost</v-icon>
                <span class="overflow-visible w-auto">
                  Heroku
                </span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2"
                   href="https://web.archive.org/web/20200811191852/https://www.doverdigitaldesign.ca/"
                   target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="sayfriends.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">SayFriends</h4>
            <p class="mb-3">UK Startup - Child Friendly Social Network</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-java</v-icon>
                <span class="overflow-visible w-auto">
                  Java
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-python</v-icon>
                <span class="overflow-visible w-auto">
                  Python
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-react</v-icon>
                <span class="overflow-visible w-auto">
                  React
                </span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-bootstrap</v-icon>
                <span class="overflow-visible w-auto">
                  Bootstrap
                </span>
              </v-chip>
            </v-row>

            <v-divider class="mt-2"/>
            <v-btn color="purple-lighten-1 mt-2"
                   href="https://web.archive.org/web/20160626121736/http://www.sayfriends.com/" target="_blank">
              Visit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="artectis.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">Artectis</h4>
            <p class="mb-3">IT Consultancy</p>

            <v-row no-gutters align-content="center" justify="center">
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-language-python</v-icon>
                <span>Flask</span>
              </v-chip>
              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-bootstrap</v-icon>
                <span>Bootstrap</span>
              </v-chip>

              <v-chip class="w-auto overflow-visible ma-2">
                <v-icon class="mr-1">mdi-react</v-icon>
                <span>React</span>
              </v-chip>
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

  </v-container>


</template>

<style scoped>

hr {
  border: none;
  height: 1px;
  /* Set the hr color */
  color: #333; /* old IE */
  background-color: #333; /* Modern Browsers */
}

@media (min-width: 600px) {
  .name-chips {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>
