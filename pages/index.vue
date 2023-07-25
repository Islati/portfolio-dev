<script setup lang="ts">
import {CV_DATA_ENCODED} from "~/helpers/cv";
import VuePdfEmbed from "vue-pdf-embed";

const pdfData = ref(CV_DATA_ENCODED);
</script>

<template>
  <v-container fluid>
    <v-row no-gutters class="pb-2">
      <v-col cols="12">
        <v-row align-content="center" no-gutters>
          <v-col cols="1">
            <v-row no-gutters align-content="center" justify="center">
              <v-img class="rounded-sm" src="avatar.png" width="50" alt="Islati"></v-img>
            </v-row>

          </v-col>
          <v-col cols="11">
            <v-row no-gutters>
              <v-col cols="2">
                <h1 class="font-weight-medium ma-2 text-white">Islati Sk</h1>

              </v-col>
              <v-col cols="10" class="mt-3 text-right">
                <v-chip href="https://github.com/Islati" label target="_blank" size="small"
                        class="bg-grey-darken-4 text-white ma-2">

                  <v-icon class="mr-1">mdi-github</v-icon>
                  <span>GitHub</span>
                </v-chip>
                <v-chip label href="https://www.linkedin.com/in/islati-sk-2108b6224/" target="_blank" size="small"
                        class="bg-blue text-white ma-2">
                  <v-icon class="mr-1">mdi-linkedin</v-icon>
                  <span>LinkedIn</span>
                </v-chip>
                <v-chip label href="http://www.youtube.com/c/Islati" target="_blank" size="small"
                        class="bg-red text-white ma-2">
                  <v-icon class="mr-1">mdi-youtube</v-icon>
                  <span>YouTube</span>
                </v-chip>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-chip label size="small" class="ma-2 text-orange-accent-1">Full-Stack Software Engineer</v-chip>
              <v-chip size="small" label class="ma-2 text-green-accent-1">Music Producer</v-chip>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row align-content="center" justify="center" class="mb-2 mt-5" no-gutters>
      <v-col cols="4" align-self="center" class="text-center">
        <h4>Projects</h4>

      </v-col>
    </v-row>


    <v-row class="mt-5" justify="center">
      <v-col cols="4">
      </v-col>
    </v-row>

    <!--  Projects History -->
    <v-row no-gutters align-content="center" justify="center">
      <v-col cols="3">
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
      <v-col cols="3" offset="1">
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


    </v-row>

    <v-row no-gutters class="mt-2" justify="center">
      <v-col cols="3">
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
      <v-col cols="3" offset="1" class="mt-3">
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
      <v-col cols="3" offset="1" class="mt-3">
        <v-card>
          <v-img src="simptek.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">Simptek</h4>
            <p class="mb-3">Powering the
              Grid Edge Economy</p>

            <v-row no-gutters align-content="center" justify="center">
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
      <v-col cols="3" class="mt-3">
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
      <v-col cols="3" offset="1" class="mt-3">
        <v-card>
          <v-img src="intertek.png" cover class="text-white"></v-img>
          <v-card-text class="text--primary text-center">
            <h4 class="font-weight-thin">Ingrid - Intertek</h4>
            <p class="mb-3">Worlds largest wind turbine database.</p>

            <v-row no-gutters align-content="center" justify="center">
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
      <v-col cols="3" offset="1" class="mt-3">
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
      <v-col cols="3" class="mt-3">
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
      <v-col cols="3" offset="1" class="mt-3">
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
      <v-col cols="3" class="mt-3">
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
      <v-col cols="3" offset="1" class="mt-3">
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
.ul-simple {
  list-style-type: none;
}

hr {
  border: none;
  height: 1px;
  /* Set the hr color */
  color: #333;  /* old IE */
  background-color: #333;  /* Modern Browsers */
}

</style>
