import { parse } from "node-html-parser";
import * as fs from "fs";
async function main() {
  const tags = {};
  const parsed = parse(`<div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="supergenre"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Top-Level Genres</h2>
  <div class="taglist" style="grid-template-rows:repeat(4, min-content)">
  <div class="label" data-s="INDIE">
  <a class="label-link label-color-0" href="/tag/492/">🌱 Indie</a>
  <span class="label-count">82409</span>
  </div>
  <div class="label" data-s="ACTION">
  <a class="label-link label-color-1" href="/tag/19/">💥 Action</a>
  <span class="label-count">67519</span>
  </div>
  <div class="label" data-s="CASUAL">
  <a class="label-link label-color-2" href="/tag/597/">😌 Casual</a>
  <span class="label-count">59158</span>
  </div>
  <div class="label" data-s="ADVENTURE">
  <a class="label-link label-color-3" href="/tag/21/">🗺️ Adventure</a>
  <span class="label-count">57802</span>
  </div>
  <div class="label" data-s="SIMULATION">
  <a class="label-link label-color-4" href="/tag/599/">🖥️ Simulation</a>
  <span class="label-count">37494</span>
  </div>
  <div class="label" data-s="RPG">
  <a class="label-link label-color-5" href="/tag/122/">🎲 RPG</a>
  <span class="label-count">34827</span>
  </div>
  <div class="label" data-s="STRATEGY">
  <a class="label-link label-color-6" href="/tag/9/">💡 Strategy</a>
  <span class="label-count">34687</span>
  </div>
  <div class="label" data-s="ACTION-ADVENTURE">
  <a class="label-link label-color-7" href="/tag/4106/">🌄 Action-Adventure</a>
  <span class="label-count">13459</span>
  </div>
  <div class="label" data-s="SPORTS">
  <a class="label-link label-color-8" href="/tag/701/">🏅 Sports</a>
  <span class="label-count">7856</span>
  </div>
  <div class="label" data-s="RACING">
  <a class="label-link label-color-9" href="/tag/699/">🏁 Racing</a>
  <span class="label-count">6580</span>
  </div>
  <div class="label" data-s="SOFTWARE">
  <a class="label-link label-color-10" href="/tag/8013/">💾 Software</a>
  <span class="label-count">2780</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="theme"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Themes &amp; Moods</h2>
  <div class="taglist" style="grid-template-rows:repeat(53, min-content)">
  <div class="label" data-s="ATMOSPHERIC">
  <a class="label-link label-color-11" href="/tag/4166/">🌫 Atmospheric</a>
  <span class="label-count">22034</span>
  </div>
  <div class="label" data-s="FANTASY">
  <a class="label-link label-color-12" href="/tag/1684/">🎭 Fantasy</a>
  <span class="label-count">19570</span>
  </div>
  <div class="label" data-s="FUNNY">
  <a class="label-link label-color-0" href="/tag/4136/">😃 Funny</a>
  <span class="label-count">12560</span>
  </div>
  <div class="label" data-s="RELAXING">
  <a class="label-link label-color-1" href="/tag/1654/">🧘 Relaxing</a>
  <span class="label-count">12358</span>
  </div>
  <div class="label" data-s="SCI-FI">
  <a class="label-link label-color-2" href="/tag/3942/">🚀 Sci-fi</a>
  <span class="label-count">12212</span>
  </div>
  <div class="label" data-s="HORROR">
  <a class="label-link label-color-3" href="/tag/1667/">😱 Horror</a>
  <span class="label-count">11568</span>
  </div>
  <div class="label" data-s="FAMILY FRIENDLY">
  <a class="label-link label-color-4" href="/tag/5350/">👪 Family Friendly</a>
  <span class="label-count">11337</span>
  </div>
  <div class="label" data-s="RETRO">
  <a class="label-link label-color-5" href="/tag/4004/">👾 Retro</a>
  <span class="label-count">11011</span>
  </div>
  <div class="label" data-s="SURVIVAL">
  <a class="label-link label-color-6" href="/tag/1662/">🌲 Survival</a>
  <span class="label-count">8788</span>
  </div>
  <div class="label" data-s="COMEDY">
  <a class="label-link label-color-7" href="/tag/1719/">🤡 Comedy</a>
  <span class="label-count">8090</span>
  </div>
  <div class="label" data-s="SPORTS">
  <a class="label-link label-color-8" href="/tag/701/">🏅 Sports</a>
  <span class="label-count">7856</span>
  </div>
  <div class="label" data-s="MYSTERY">
  <a class="label-link label-color-9" href="/tag/5716/">🤫 Mystery</a>
  <span class="label-count">7760</span>
  </div>
  <div class="label" data-s="DARK">
  <a class="label-link label-color-10" href="/tag/4342/">😨 Dark</a>
  <span class="label-count">7602</span>
  </div>
  <div class="label" data-s="OLD SCHOOL">
  <a class="label-link label-color-11" href="/tag/3916/">🕹️ Old School</a>
  <span class="label-count">7354</span>
  </div>
  <div class="label" data-s="PSYCHOLOGICAL HORROR">
  <a class="label-link label-color-12" href="/tag/1721/">🕴 Psychological Horror</a>
  <span class="label-count">6840</span>
  </div>
  <div class="label" data-s="MEDIEVAL">
  <a class="label-link label-color-0" href="/tag/4172/">🏰 Medieval</a>
  <span class="label-count">6732</span>
  </div>
  <div class="label" data-s="RACING">
  <a class="label-link label-color-1" href="/tag/699/">🏁 Racing</a>
  <span class="label-count">6580</span>
  </div>
  <div class="label" data-s="MAGIC">
  <a class="label-link label-color-2" href="/tag/4057/">🪄 Magic</a>
  <span class="label-count">6134</span>
  </div>
  <div class="label" data-s="SPACE">
  <a class="label-link label-color-3" href="/tag/1755/">🌠 Space</a>
  <span class="label-count">6032</span>
  </div>
  <div class="label" data-s="TACTICAL">
  <a class="label-link label-color-4" href="/tag/1708/">🤔 Tactical</a>
  <span class="label-count">5775</span>
  </div>
  <div class="label" data-s="BUILDING">
  <a class="label-link label-color-5" href="/tag/1643/">🏠 Building</a>
  <span class="label-count">5752</span>
  </div>
  <div class="label" data-s="MANAGEMENT">
  <a class="label-link label-color-6" href="/tag/12472/">💼 Management</a>
  <span class="label-count">5623</span>
  </div>
  <div class="label" data-s="FUTURISTIC">
  <a class="label-link label-color-7" href="/tag/4295/">🌆 Futuristic</a>
  <span class="label-count">5235</span>
  </div>
  <div class="label" data-s="DRAMA">
  <a class="label-link label-color-8" href="/tag/5984/">🎭 Drama</a>
  <span class="label-count">5032</span>
  </div>
  <div class="label" data-s="LOGIC">
  <a class="label-link label-color-9" href="/tag/6129/">🧩 Logic</a>
  <span class="label-count">5031</span>
  </div>
  <div class="label" data-s="ROMANCE">
  <a class="label-link label-color-10" href="/tag/4947/">💘 Romance</a>
  <span class="label-count">4830</span>
  </div>
  <div class="label" data-s="CRAFTING">
  <a class="label-link label-color-11" href="/tag/1702/">🔧 Crafting</a>
  <span class="label-count">4811</span>
  </div>
  <div class="label" data-s="1980S">
  <a class="label-link label-color-12" href="/tag/7743/">🎸 1980s</a>
  <span class="label-count">4635</span>
  </div>
  <div class="label" data-s="DARK FANTASY">
  <a class="label-link label-color-0" href="/tag/4604/">🧝 Dark Fantasy</a>
  <span class="label-count">4616</span>
  </div>
  <div class="label" data-s="SURVIVAL HORROR">
  <a class="label-link label-color-1" href="/tag/3978/">🎒 Survival Horror</a>
  <span class="label-count">4375</span>
  </div>
  <div class="label" data-s="EDUCATION">
  <a class="label-link label-color-2" href="/tag/1036/">🏫 Education</a>
  <span class="label-count">4278</span>
  </div>
  <div class="label" data-s="EMOTIONAL">
  <a class="label-link label-color-3" href="/tag/5608/">💔 Emotional</a>
  <span class="label-count">4216</span>
  </div>
  <div class="label" data-s="NATURE">
  <a class="label-link label-color-4" href="/tag/30358/">🌿 Nature</a>
  <span class="label-count">3993</span>
  </div>
  <div class="label" data-s="POST-APOCALYPTIC">
  <a class="label-link label-color-5" href="/tag/3835/">☢️ Post-apocalyptic</a>
  <span class="label-count">3719</span>
  </div>
  <div class="label" data-s="WAR">
  <a class="label-link label-color-6" href="/tag/1678/">⚔️ War</a>
  <span class="label-count">3693</span>
  </div>
  <div class="label" data-s="1990'S">
  <a class="label-link label-color-7" href="/tag/6691/">📼 1990's</a>
  <span class="label-count">3660</span>
  </div>
  <div class="label" data-s="ZOMBIES">
  <a class="label-link label-color-8" href="/tag/1659/">🧟 Zombies</a>
  <span class="label-count">3641</span>
  </div>
  <div class="label" data-s="SURREAL">
  <a class="label-link label-color-9" href="/tag/1710/">🫠 Surreal</a>
  <span class="label-count">3605</span>
  </div>
  <div class="label" data-s="HISTORICAL">
  <a class="label-link label-color-10" href="/tag/3987/">📜 Historical</a>
  <span class="label-count">3597</span>
  </div>
  <div class="label" data-s="STEALTH">
  <a class="label-link label-color-11" href="/tag/1687/">🥷 Stealth</a>
  <span class="label-count">3227</span>
  </div>
  <div class="label" data-s="MILITARY">
  <a class="label-link label-color-12" href="/tag/4168/">🪖 Military</a>
  <span class="label-count">2977</span>
  </div>
  <div class="label" data-s="LGBTQ+">
  <a class="label-link label-color-0" href="/tag/44868/">🏳️‍🌈 LGBTQ+</a>
  <span class="label-count">2906</span>
  </div>
  <div class="label" data-s="INVESTIGATION">
  <a class="label-link label-color-1" href="/tag/8369/">🔍 Investigation</a>
  <span class="label-count">2880</span>
  </div>
  <div class="label" data-s="CYBERPUNK">
  <a class="label-link label-color-2" href="/tag/4115/">🔋 Cyberpunk</a>
  <span class="label-count">2846</span>
  </div>
  <div class="label" data-s="ROBOTS">
  <a class="label-link label-color-3" href="/tag/5752/">🤖 Robots</a>
  <span class="label-count">2650</span>
  </div>
  <div class="label" data-s="DETECTIVE">
  <a class="label-link label-color-4" href="/tag/5613/">🕵️ Detective</a>
  <span class="label-count">2635</span>
  </div>
  <div class="label" data-s="ALIENS">
  <a class="label-link label-color-5" href="/tag/1673/">👽 Aliens</a>
  <span class="label-count">2595</span>
  </div>
  <div class="label" data-s="DRIVING">
  <a class="label-link label-color-6" href="/tag/1644/">🚗 Driving</a>
  <span class="label-count">2459</span>
  </div>
  <div class="label" data-s="DARK HUMOR">
  <a class="label-link label-color-7" href="/tag/5923/">🗿 Dark Humor</a>
  <span class="label-count">2451</span>
  </div>
  <div class="label" data-s="ECONOMY">
  <a class="label-link label-color-8" href="/tag/4695/">🏦 Economy</a>
  <span class="label-count">2444</span>
  </div>
  <div class="label" data-s="DEMONS">
  <a class="label-link label-color-9" href="/tag/9541/">👿 Demons</a>
  <span class="label-count">2425</span>
  </div>
  <div class="label" data-s="LORE-RICH">
  <a class="label-link label-color-10" href="/tag/3854/">📖 Lore-Rich</a>
  <span class="label-count">2402</span>
  </div>
  <div class="label" data-s="THRILLER">
  <a class="label-link label-color-11" href="/tag/4064/">🔪 Thriller</a>
  <span class="label-count">2342</span>
  </div>
  <div class="label" data-s="PSYCHOLOGICAL">
  <a class="label-link label-color-12" href="/tag/5186/">🫂 Psychological</a>
  <span class="label-count">2249</span>
  </div>
  <div class="label" data-s="MEMES">
  <a class="label-link label-color-0" href="/tag/10397/">🤣 Memes</a>
  <span class="label-count">2220</span>
  </div>
  <div class="label" data-s="FLIGHT">
  <a class="label-link label-color-1" href="/tag/15045/">✈️ Flight</a>
  <span class="label-count">2173</span>
  </div>
  <div class="label" data-s="SUPERNATURAL">
  <a class="label-link label-color-2" href="/tag/10808/">🔮 Supernatural</a>
  <span class="label-count">2050</span>
  </div>
  <div class="label" data-s="PSYCHEDELIC">
  <a class="label-link label-color-3" href="/tag/1714/">🦄 Psychedelic</a>
  <span class="label-count">2017</span>
  </div>
  <div class="label" data-s="COMIC BOOK">
  <a class="label-link label-color-4" href="/tag/1751/">💬 Comic Book</a>
  <span class="label-count">1994</span>
  </div>
  <div class="label" data-s="MODERN">
  <a class="label-link label-color-5" href="/tag/5673/">💻 Modern</a>
  <span class="label-count">1988</span>
  </div>
  <div class="label" data-s="ARTIFICIAL INTELLIGENCE">
  <a class="label-link label-color-6" href="/tag/7926/">🤖 Artificial Intelligence</a>
  <span class="label-count">1940</span>
  </div>
  <div class="label" data-s="DYSTOPIAN ">
  <a class="label-link label-color-7" href="/tag/5030/">⛓ Dystopian </a>
  <span class="label-count">1910</span>
  </div>
  <div class="label" data-s="LOOT">
  <a class="label-link label-color-8" href="/tag/4236/">📦 Loot</a>
  <span class="label-count">1764</span>
  </div>
  <div class="label" data-s="ALTERNATE HISTORY">
  <a class="label-link label-color-9" href="/tag/4598/">🕰️ Alternate History</a>
  <span class="label-count">1718</span>
  </div>
  <div class="label" data-s="PARKOUR">
  <a class="label-link label-color-10" href="/tag/4036/">🧗 Parkour</a>
  <span class="label-count">1604</span>
  </div>
  <div class="label" data-s="MYTHOLOGY">
  <a class="label-link label-color-11" href="/tag/16094/">👹 Mythology</a>
  <span class="label-count">1560</span>
  </div>
  <div class="label" data-s="DESTRUCTION">
  <a class="label-link label-color-12" href="/tag/5363/">💥 Destruction</a>
  <span class="label-count">1556</span>
  </div>
  <div class="label" data-s="CRIME">
  <a class="label-link label-color-0" href="/tag/6378/">🚨 Crime</a>
  <span class="label-count">1524</span>
  </div>
  <div class="label" data-s="CATS">
  <a class="label-link label-color-1" href="/tag/17894/">🐱 Cats</a>
  <span class="label-count">1505</span>
  </div>
  <div class="label" data-s="GAME DEVELOPMENT">
  <a class="label-link label-color-2" href="/tag/13906/">🛠️ Game Development</a>
  <span class="label-count">1481</span>
  </div>
  <div class="label" data-s="DARK COMEDY">
  <a class="label-link label-color-3" href="/tag/19995/">🧛🏻 Dark Comedy</a>
  <span class="label-count">1228</span>
  </div>
  <div class="label" data-s="PHILOSOPHICAL">
  <a class="label-link label-color-4" href="/tag/15277/">🧙‍♂ Philosophical</a>
  <span class="label-count">1208</span>
  </div>
  <div class="label" data-s="SCIENCE">
  <a class="label-link label-color-5" href="/tag/5794/">🔬 Science</a>
  <span class="label-count">1182</span>
  </div>
  <div class="label" data-s="LOVECRAFTIAN">
  <a class="label-link label-color-6" href="/tag/7432/">🐙 Lovecraftian</a>
  <span class="label-count">1150</span>
  </div>
  <div class="label" data-s="WORLD WAR II">
  <a class="label-link label-color-7" href="/tag/4150/">🪂 World War II</a>
  <span class="label-count">1146</span>
  </div>
  <div class="label" data-s="SWORDPLAY">
  <a class="label-link label-color-8" href="/tag/4608/">🤺 Swordplay</a>
  <span class="label-count">1124</span>
  </div>
  <div class="label" data-s="NOIR">
  <a class="label-link label-color-9" href="/tag/6052/">🕵️ Noir</a>
  <span class="label-count">1105</span>
  </div>
  <div class="label" data-s="CAPITALISM">
  <a class="label-link label-color-10" href="/tag/4845/">🤑 Capitalism</a>
  <span class="label-count">1075</span>
  </div>
  <div class="label" data-s="AUTOMATION">
  <a class="label-link label-color-11" href="/tag/255534/">🤖 Automation</a>
  <span class="label-count">1054</span>
  </div>
  <div class="label" data-s="DRAGONS">
  <a class="label-link label-color-12" href="/tag/4046/">🐲 Dragons</a>
  <span class="label-count">1042</span>
  </div>
  <div class="label" data-s="AMERICA">
  <a class="label-link label-color-0" href="/tag/13190/">🌎 America</a>
  <span class="label-count">967</span>
  </div>
  <div class="label" data-s="AGRICULTURE">
  <a class="label-link label-color-1" href="/tag/22602/">🌾 Agriculture</a>
  <span class="label-count">887</span>
  </div>
  <div class="label" data-s="PARODY ">
  <a class="label-link label-color-2" href="/tag/4878/">🥸 Parody </a>
  <span class="label-count">875</span>
  </div>
  <div class="label" data-s="COOKING">
  <a class="label-link label-color-3" href="/tag/3920/">🍲 Cooking</a>
  <span class="label-count">862</span>
  </div>
  <div class="label" data-s="MECHS">
  <a class="label-link label-color-4" href="/tag/4821/">🤖 Mechs</a>
  <span class="label-count">839</span>
  </div>
  <div class="label" data-s="MARTIAL ARTS">
  <a class="label-link label-color-5" href="/tag/6915/">🥋 Martial Arts</a>
  <span class="label-count">831</span>
  </div>
  <div class="label" data-s="CONSPIRACY">
  <a class="label-link label-color-6" href="/tag/5372/">👁️ Conspiracy</a>
  <span class="label-count">819</span>
  </div>
  <div class="label" data-s="STEAMPUNK">
  <a class="label-link label-color-7" href="/tag/1777/">🧷 Steampunk</a>
  <span class="label-count">790</span>
  </div>
  <div class="label" data-s="GOTHIC">
  <a class="label-link label-color-8" href="/tag/3952/">🦇 Gothic</a>
  <span class="label-count">780</span>
  </div>
  <div class="label" data-s="PIRATES">
  <a class="label-link label-color-9" href="/tag/1681/">🏴‍☠ Pirates</a>
  <span class="label-count">746</span>
  </div>
  <div class="label" data-s="SATIRE">
  <a class="label-link label-color-10" href="/tag/1651/">🎭 Satire</a>
  <span class="label-count">738</span>
  </div>
  <div class="label" data-s="UNDERGROUND">
  <a class="label-link label-color-11" href="/tag/21006/">🕳️ Underground</a>
  <span class="label-count">720</span>
  </div>
  <div class="label" data-s="TANKS">
  <a class="label-link label-color-12" href="/tag/13276/">🚜 Tanks</a>
  <span class="label-count">709</span>
  </div>
  <div class="label" data-s="TIME TRAVEL">
  <a class="label-link label-color-0" href="/tag/10679/">⏳ Time Travel</a>
  <span class="label-count">693</span>
  </div>
  <div class="label" data-s="MINING">
  <a class="label-link label-color-1" href="/tag/5981/">⛏️ Mining</a>
  <span class="label-count">692</span>
  </div>
  <div class="label" data-s="POLITICAL">
  <a class="label-link label-color-2" href="/tag/4853/">🗳️ Political</a>
  <span class="label-count">689</span>
  </div>
  <div class="label" data-s="NINJA">
  <a class="label-link label-color-3" href="/tag/1688/">🥷 Ninja</a>
  <span class="label-count">679</span>
  </div>
  <div class="label" data-s="DOG">
  <a class="label-link label-color-4" href="/tag/1638/">🐶 Dog</a>
  <span class="label-count">672</span>
  </div>
  <div class="label" data-s="HUNTING">
  <a class="label-link label-color-5" href="/tag/9564/">🏹 Hunting</a>
  <span class="label-count">658</span>
  </div>
  <div class="label" data-s="OTOME">
  <a class="label-link label-color-6" href="/tag/31579/">💘 Otome</a>
  <span class="label-count">646</span>
  </div>
  <div class="label" data-s="VAMPIRE">
  <a class="label-link label-color-7" href="/tag/4018/">🧛 Vampire</a>
  <span class="label-count">642</span>
  </div>
  <div class="label" data-s="UNDERWATER">
  <a class="label-link label-color-8" href="/tag/9157/">🌊 Underwater</a>
  <span class="label-count">632</span>
  </div>
  <div class="label" data-s="DINOSAURS">
  <a class="label-link label-color-9" href="/tag/5160/">🦖 Dinosaurs</a>
  <span class="label-count">627</span>
  </div>
  <div class="label" data-s="FISHING">
  <a class="label-link label-color-10" href="/tag/15564/">🎣 Fishing</a>
  <span class="label-count">579</span>
  </div>
  <div class="label" data-s="HACKING">
  <a class="label-link label-color-11" href="/tag/5502/">🔌 Hacking</a>
  <span class="label-count">571</span>
  </div>
  <div class="label" data-s="WESTERN">
  <a class="label-link label-color-12" href="/tag/1647/">🤠 Western</a>
  <span class="label-count">558</span>
  </div>
  <div class="label" data-s="TRAINS">
  <a class="label-link label-color-0" href="/tag/1616/">🚂 Trains</a>
  <span class="label-count">556</span>
  </div>
  <div class="label" data-s="PROGRAMMING">
  <a class="label-link label-color-1" href="/tag/5432/">💻 Programming</a>
  <span class="label-count">547</span>
  </div>
  <div class="label" data-s="FAITH">
  <a class="label-link label-color-2" href="/tag/180368/">🙏 Faith</a>
  <span class="label-count">543</span>
  </div>
  <div class="label" data-s="TRANSPORTATION">
  <a class="label-link label-color-3" href="/tag/10383/">🚌 Transportation</a>
  <span class="label-count">519</span>
  </div>
  <div class="label" data-s="SUPERHERO">
  <a class="label-link label-color-4" href="/tag/1671/">🦸 Superhero</a>
  <span class="label-count">518</span>
  </div>
  <div class="label" data-s="NAVAL">
  <a class="label-link label-color-5" href="/tag/6910/">🚢 Naval</a>
  <span class="label-count">507</span>
  </div>
  <div class="label" data-s="ASSASSIN">
  <a class="label-link label-color-6" href="/tag/4376/">🗡️ Assassin</a>
  <span class="label-count">502</span>
  </div>
  <div class="label" data-s="POLITICS">
  <a class="label-link label-color-7" href="/tag/4754/">🗳️ Politics</a>
  <span class="label-count">494</span>
  </div>
  <div class="label" data-s="DIPLOMACY">
  <a class="label-link label-color-8" href="/tag/6310/">🤝 Diplomacy</a>
  <span class="label-count">463</span>
  </div>
  <div class="label" data-s="COLD WAR">
  <a class="label-link label-color-9" href="/tag/5179/">☢️ Cold War</a>
  <span class="label-count">433</span>
  </div>
  <div class="label" data-s="GAMBLING">
  <a class="label-link label-color-10" href="/tag/16250/">🎰 Gambling</a>
  <span class="label-count">431</span>
  </div>
  <div class="label" data-s="HEIST">
  <a class="label-link label-color-11" href="/tag/1680/">💸 Heist</a>
  <span class="label-count">422</span>
  </div>
  <div class="label" data-s="ARCHERY">
  <a class="label-link label-color-12" href="/tag/13382/">🎯 Archery</a>
  <span class="label-count">422</span>
  </div>
  <div class="label" data-s="SNOW">
  <a class="label-link label-color-0" href="/tag/9803/">❄️ Snow</a>
  <span class="label-count">413</span>
  </div>
  <div class="label" data-s="SAILING">
  <a class="label-link label-color-1" href="/tag/13577/">⛵ Sailing</a>
  <span class="label-count">374</span>
  </div>
  <div class="label" data-s="ILLUMINATI">
  <a class="label-link label-color-2" href="/tag/7478/">👁️ Illuminati</a>
  <span class="label-count">356</span>
  </div>
  <div class="label" data-s="FOOTBALL (SOCCER)">
  <a class="label-link label-color-3" href="/tag/1254546/">⚽ Football (Soccer)</a>
  <span class="label-count">352</span>
  </div>
  <div class="label" data-s="OFFROAD">
  <a class="label-link label-color-4" href="/tag/7622/">🛻 Offroad</a>
  <span class="label-count">333</span>
  </div>
  <div class="label" data-s="FOREIGN">
  <a class="label-link label-color-5" href="/tag/51306/">🌍 Foreign</a>
  <span class="label-count">330</span>
  </div>
  <div class="label" data-s="HORSES">
  <a class="label-link label-color-6" href="/tag/6041/">🐎 Horses</a>
  <span class="label-count">291</span>
  </div>
  <div class="label" data-s="SNIPER">
  <a class="label-link label-color-7" href="/tag/7423/">🏹 Sniper</a>
  <span class="label-count">291</span>
  </div>
  <div class="label" data-s="MARS">
  <a class="label-link label-color-8" href="/tag/6702/">🔴 Mars</a>
  <span class="label-count">287</span>
  </div>
  <div class="label" data-s="TRANSHUMANISM">
  <a class="label-link label-color-9" href="/tag/4137/">🧬 Transhumanism</a>
  <span class="label-count">280</span>
  </div>
  <div class="label" data-s="WEREWOLVES">
  <a class="label-link label-color-10" href="/tag/17015/">🐺 Werewolves</a>
  <span class="label-count">266</span>
  </div>
  <div class="label" data-s="BOXING">
  <a class="label-link label-color-11" href="/tag/12190/">🥊 Boxing</a>
  <span class="label-count">263</span>
  </div>
  <div class="label" data-s="JET">
  <a class="label-link label-color-12" href="/tag/92092/">✈️ Jet</a>
  <span class="label-count">262</span>
  </div>
  <div class="label" data-s="MOTORBIKE">
  <a class="label-link label-color-0" href="/tag/198913/">🏍️ Motorbike</a>
  <span class="label-count">251</span>
  </div>
  <div class="label" data-s="GOLF">
  <a class="label-link label-color-1" href="/tag/7038/">🏌️ Golf</a>
  <span class="label-count">244</span>
  </div>
  <div class="label" data-s="WORLD WAR I">
  <a class="label-link label-color-2" href="/tag/5382/">🎖️ World War I</a>
  <span class="label-count">234</span>
  </div>
  <div class="label" data-s="BIKES">
  <a class="label-link label-color-3" href="/tag/123332/">🚲 Bikes</a>
  <span class="label-count">230</span>
  </div>
  <div class="label" data-s="ROME">
  <a class="label-link label-color-4" href="/tag/6948/">🏛️ Rome</a>
  <span class="label-count">220</span>
  </div>
  <div class="label" data-s="LEGO">
  <a class="label-link label-color-5" href="/tag/1736/">🧱 LEGO</a>
  <span class="label-count">209</span>
  </div>
  <div class="label" data-s="SUBMARINE">
  <a class="label-link label-color-6" href="/tag/19780/">🤿 Submarine</a>
  <span class="label-count">201</span>
  </div>
  <div class="label" data-s="BASKETBALL">
  <a class="label-link label-color-7" href="/tag/1746/">🏀 Basketball</a>
  <span class="label-count">191</span>
  </div>
  <div class="label" data-s="FOOTBALL (AMERICAN)">
  <a class="label-link label-color-8" href="/tag/1254552/">🏈 Football (American)</a>
  <span class="label-count">158</span>
  </div>
  <div class="label" data-s="MINI GOLF">
  <a class="label-link label-color-9" href="/tag/22955/">⛳ Mini Golf</a>
  <span class="label-count">157</span>
  </div>
  <div class="label" data-s="WARHAMMER 40K">
  <a class="label-link label-color-10" href="/tag/12286/">🔨 Warhammer 40K</a>
  <span class="label-count">134</span>
  </div>
  <div class="label" data-s="SKATEBOARDING">
  <a class="label-link label-color-11" href="/tag/1753/">🛹 Skateboarding</a>
  <span class="label-count">132</span>
  </div>
  <div class="label" data-s="WRESTLING">
  <a class="label-link label-color-12" href="/tag/47827/">🤼 Wrestling</a>
  <span class="label-count">130</span>
  </div>
  <div class="label" data-s="POOL">
  <a class="label-link label-color-0" href="/tag/17927/">🏊 Pool</a>
  <span class="label-count">113</span>
  </div>
  <div class="label" data-s="TENNIS">
  <a class="label-link label-color-1" href="/tag/5914/">🎾 Tennis</a>
  <span class="label-count">111</span>
  </div>
  <div class="label" data-s="BASEBALL">
  <a class="label-link label-color-2" href="/tag/5727/">⚾ Baseball</a>
  <span class="label-count">107</span>
  </div>
  <div class="label" data-s="CYCLING">
  <a class="label-link label-color-3" href="/tag/19568/">🚴 Cycling</a>
  <span class="label-count">107</span>
  </div>
  <div class="label" data-s="MOTOCROSS">
  <a class="label-link label-color-4" href="/tag/15868/">🚵🏿 Motocross</a>
  <span class="label-count">95</span>
  </div>
  <div class="label" data-s="SKATING">
  <a class="label-link label-color-5" href="/tag/96359/">🛹 Skating</a>
  <span class="label-count">95</span>
  </div>
  <div class="label" data-s="LEMMINGS">
  <a class="label-link label-color-6" href="/tag/17337/">🐹 Lemmings</a>
  <span class="label-count">86</span>
  </div>
  <div class="label" data-s="HOCKEY">
  <a class="label-link label-color-7" href="/tag/324176/">🏒 Hockey</a>
  <span class="label-count">76</span>
  </div>
  <div class="label" data-s="BOWLING">
  <a class="label-link label-color-8" href="/tag/7328/">🎳 Bowling</a>
  <span class="label-count">71</span>
  </div>
  <div class="label" data-s="SNOWBOARDING">
  <a class="label-link label-color-9" href="/tag/28444/">🏂 Snowboarding</a>
  <span class="label-count">67</span>
  </div>
  <div class="label" data-s="SKIING">
  <a class="label-link label-color-10" href="/tag/7309/">⛷ Skiing</a>
  <span class="label-count">63</span>
  </div>
  <div class="label" data-s="BMX">
  <a class="label-link label-color-11" href="/tag/252854/">🚲 BMX</a>
  <span class="label-count">55</span>
  </div>
  <div class="label" data-s="ATV">
  <a class="label-link label-color-12" href="/tag/129761/">🛻 ATV</a>
  <span class="label-count">48</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="visuals"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Visuals &amp; Viewpoint</h2>
  <div class="taglist" style="grid-template-rows:repeat(10, min-content)">
  <div class="label" data-s="2D">
  <a class="label-link label-color-0" href="/tag/3871/">🏽 2D</a>
  <span class="label-count">34808</span>
  </div>
  <div class="label" data-s="3D">
  <a class="label-link label-color-1" href="/tag/4191/">🧊 3D</a>
  <span class="label-count">24921</span>
  </div>
  <div class="label" data-s="COLORFUL">
  <a class="label-link label-color-2" href="/tag/4305/">🎨 Colorful</a>
  <span class="label-count">19433</span>
  </div>
  <div class="label" data-s="PIXEL GRAPHICS">
  <a class="label-link label-color-3" href="/tag/3964/">👾 Pixel Graphics</a>
  <span class="label-count">18770</span>
  </div>
  <div class="label" data-s="CUTE">
  <a class="label-link label-color-4" href="/tag/4726/">🧸 Cute</a>
  <span class="label-count">17273</span>
  </div>
  <div class="label" data-s="FIRST-PERSON">
  <a class="label-link label-color-5" href="/tag/3839/">🙌 First-Person</a>
  <span class="label-count">15649</span>
  </div>
  <div class="label" data-s="ANIME">
  <a class="label-link label-color-6" href="/tag/4085/">🌸 Anime</a>
  <span class="label-count">13267</span>
  </div>
  <div class="label" data-s="THIRD PERSON">
  <a class="label-link label-color-7" href="/tag/1697/">👤 Third Person</a>
  <span class="label-count">10637</span>
  </div>
  <div class="label" data-s="STYLIZED">
  <a class="label-link label-color-8" href="/tag/4252/">🎨 Stylized</a>
  <span class="label-count">10127</span>
  </div>
  <div class="label" data-s="TOP-DOWN">
  <a class="label-link label-color-9" href="/tag/4791/">🗺️ Top-Down</a>
  <span class="label-count">9612</span>
  </div>
  <div class="label" data-s="REALISTIC">
  <a class="label-link label-color-10" href="/tag/4175/">🌱 Realistic</a>
  <span class="label-count">9131</span>
  </div>
  <div class="label" data-s="CARTOONY">
  <a class="label-link label-color-11" href="/tag/4195/">🐰 Cartoony</a>
  <span class="label-count">8128</span>
  </div>
  <div class="label" data-s="VR">
  <a class="label-link label-color-12" href="/tag/21978/">🥽 VR</a>
  <span class="label-count">7694</span>
  </div>
  <div class="label" data-s="MINIMALIST">
  <a class="label-link label-color-0" href="/tag/4094/">☯ Minimalist</a>
  <span class="label-count">6706</span>
  </div>
  <div class="label" data-s="HAND-DRAWN">
  <a class="label-link label-color-1" href="/tag/6815/">🎨 Hand-drawn</a>
  <span class="label-count">6217</span>
  </div>
  <div class="label" data-s="CARTOON">
  <a class="label-link label-color-2" href="/tag/4562/">🐰 Cartoon</a>
  <span class="label-count">4875</span>
  </div>
  <div class="label" data-s="TEXT-BASED">
  <a class="label-link label-color-3" href="/tag/31275/">📝 Text-Based</a>
  <span class="label-count">3266</span>
  </div>
  <div class="label" data-s="ISOMETRIC">
  <a class="label-link label-color-4" href="/tag/5851/">🌆 Isometric</a>
  <span class="label-count">3145</span>
  </div>
  <div class="label" data-s="2.5D">
  <a class="label-link label-color-5" href="/tag/4975/">🌓 2.5D</a>
  <span class="label-count">3095</span>
  </div>
  <div class="label" data-s="CINEMATIC">
  <a class="label-link label-color-6" href="/tag/4145/">🍿 Cinematic</a>
  <span class="label-count">3074</span>
  </div>
  <div class="label" data-s="ABSTRACT">
  <a class="label-link label-color-7" href="/tag/4400/">🤯 Abstract</a>
  <span class="label-count">2663</span>
  </div>
  <div class="label" data-s="PSYCHEDELIC">
  <a class="label-link label-color-8" href="/tag/1714/">🦄 Psychedelic</a>
  <span class="label-count">2017</span>
  </div>
  <div class="label" data-s="COMIC BOOK">
  <a class="label-link label-color-9" href="/tag/1751/">💬 Comic Book</a>
  <span class="label-count">1994</span>
  </div>
  <div class="label" data-s="NOIR">
  <a class="label-link label-color-10" href="/tag/6052/">🕵️ Noir</a>
  <span class="label-count">1105</span>
  </div>
  <div class="label" data-s="SPLIT SCREEN">
  <a class="label-link label-color-11" href="/tag/10816/">📺 Split Screen</a>
  <span class="label-count">1077</span>
  </div>
  <div class="label" data-s="BEAUTIFUL">
  <a class="label-link label-color-12" href="/tag/5411/">🦚 Beautiful</a>
  <span class="label-count">1020</span>
  </div>
  <div class="label" data-s="3D VISION">
  <a class="label-link label-color-0" href="/tag/29363/">🤓 3D Vision</a>
  <span class="label-count">972</span>
  </div>
  <div class="label" data-s="VOXEL">
  <a class="label-link label-color-1" href="/tag/1732/">🧊 Voxel</a>
  <span class="label-count">857</span>
  </div>
  <div class="label" data-s="FMV">
  <a class="label-link label-color-2" href="/tag/18594/">📺 FMV</a>
  <span class="label-count">697</span>
  </div>
  <div class="label" data-s="360 VIDEO">
  <a class="label-link label-color-3" href="/tag/776177/">🌏 360 Video</a>
  <span class="label-count">300</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="genre"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Genres</h2>
  <div class="taglist" style="grid-template-rows:repeat(17, min-content)">
  <div class="label" data-s="PUZZLE">
  <a class="label-link label-color-4" href="/tag/1664/">🧩 Puzzle</a>
  <span class="label-count">20262</span>
  </div>
  <div class="label" data-s="ARCADE">
  <a class="label-link label-color-5" href="/tag/1773/">🕹 Arcade</a>
  <span class="label-count">13910</span>
  </div>
  <div class="label" data-s="ACTION-ADVENTURE">
  <a class="label-link label-color-6" href="/tag/4106/">🌄 Action-Adventure</a>
  <span class="label-count">13459</span>
  </div>
  <div class="label" data-s="SHOOTER">
  <a class="label-link label-color-7" href="/tag/1774/">🔫 Shooter</a>
  <span class="label-count">12542</span>
  </div>
  <div class="label" data-s="PLATFORMER">
  <a class="label-link label-color-8" href="/tag/1625/">🏗️ Platformer</a>
  <span class="label-count">11024</span>
  </div>
  <div class="label" data-s="VISUAL NOVEL">
  <a class="label-link label-color-9" href="/tag/3799/">📚 Visual Novel</a>
  <span class="label-count">9365</span>
  </div>
  <div class="label" data-s="SANDBOX">
  <a class="label-link label-color-10" href="/tag/3810/">🧱 Sandbox</a>
  <span class="label-count">6841</span>
  </div>
  <div class="label" data-s="POINT &amp; CLICK">
  <a class="label-link label-color-11" href="/tag/1698/">🔎 Point &amp; Click</a>
  <span class="label-count">6569</span>
  </div>
  <div class="label" data-s="ACTION RPG">
  <a class="label-link label-color-12" href="/tag/4231/">💥 Action RPG</a>
  <span class="label-count">6359</span>
  </div>
  <div class="label" data-s="ROGUE-LIKE">
  <a class="label-link label-color-0" href="/tag/1716/">👻 Rogue-like</a>
  <span class="label-count">6138</span>
  </div>
  <div class="label" data-s="TABLETOP">
  <a class="label-link label-color-1" href="/tag/17389/">🃏 Tabletop</a>
  <span class="label-count">5104</span>
  </div>
  <div class="label" data-s="TURN-BASED STRATEGY">
  <a class="label-link label-color-2" href="/tag/1741/">🎲 Turn-Based Strategy</a>
  <span class="label-count">4851</span>
  </div>
  <div class="label" data-s="INTERACTIVE FICTION">
  <a class="label-link label-color-3" href="/tag/11014/">📚 Interactive Fiction</a>
  <span class="label-count">4672</span>
  </div>
  <div class="label" data-s="ACTION ROGUELIKE">
  <a class="label-link label-color-4" href="/tag/42804/">👻 Action Roguelike</a>
  <span class="label-count">4590</span>
  </div>
  <div class="label" data-s="PARTY-BASED RPG">
  <a class="label-link label-color-5" href="/tag/10695/">🤝 Party-Based RPG</a>
  <span class="label-count">4330</span>
  </div>
  <div class="label" data-s="EDUCATION">
  <a class="label-link label-color-6" href="/tag/1036/">🏫 Education</a>
  <span class="label-count">4278</span>
  </div>
  <div class="label" data-s="JRPG">
  <a class="label-link label-color-7" href="/tag/4434/">🌸 JRPG</a>
  <span class="label-count">4158</span>
  </div>
  <div class="label" data-s="DESIGN &amp; ILLUSTRATION">
  <a class="label-link label-color-8" href="/tag/84/">🎨 Design &amp; Illustration</a>
  <span class="label-count">3961</span>
  </div>
  <div class="label" data-s="DATING SIM">
  <a class="label-link label-color-9" href="/tag/9551/">💘 Dating Sim</a>
  <span class="label-count">3930</span>
  </div>
  <div class="label" data-s="WALKING SIMULATOR">
  <a class="label-link label-color-10" href="/tag/5900/">🚶 Walking Simulator</a>
  <span class="label-count">3631</span>
  </div>
  <div class="label" data-s="CARD GAME">
  <a class="label-link label-color-11" href="/tag/1666/">🃏 Card Game</a>
  <span class="label-count">3108</span>
  </div>
  <div class="label" data-s="UTILITIES">
  <a class="label-link label-color-12" href="/tag/87/">🔧 Utilities</a>
  <span class="label-count">2920</span>
  </div>
  <div class="label" data-s="LIFE SIM">
  <a class="label-link label-color-0" href="/tag/10235/">🧫 Life Sim</a>
  <span class="label-count">2918</span>
  </div>
  <div class="label" data-s="RTS">
  <a class="label-link label-color-1" href="/tag/1676/">🌐 RTS</a>
  <span class="label-count">2797</span>
  </div>
  <div class="label" data-s="BOARD GAME">
  <a class="label-link label-color-2" href="/tag/1770/">🎲 Board Game</a>
  <span class="label-count">2702</span>
  </div>
  <div class="label" data-s="STRATEGY RPG">
  <a class="label-link label-color-3" href="/tag/17305/">🧠 Strategy RPG</a>
  <span class="label-count">2622</span>
  </div>
  <div class="label" data-s="WEB PUBLISHING">
  <a class="label-link label-color-4" href="/tag/1038/">🌐 Web Publishing</a>
  <span class="label-count">2511</span>
  </div>
  <div class="label" data-s="TOWER DEFENSE">
  <a class="label-link label-color-5" href="/tag/1645/">🏰 Tower Defense</a>
  <span class="label-count">2416</span>
  </div>
  <div class="label" data-s="CITY BUILDER">
  <a class="label-link label-color-6" href="/tag/4328/">🏙️ City Builder</a>
  <span class="label-count">2245</span>
  </div>
  <div class="label" data-s="BEAT 'EM UP">
  <a class="label-link label-color-7" href="/tag/4158/">🥊 Beat 'em up</a>
  <span class="label-count">2009</span>
  </div>
  <div class="label" data-s="2D FIGHTER">
  <a class="label-link label-color-8" href="/tag/4736/">🤼 2D Fighter</a>
  <span class="label-count">1674</span>
  </div>
  <div class="label" data-s="AUTOMOBILE SIM">
  <a class="label-link label-color-9" href="/tag/1100687/">🚗 Automobile Sim</a>
  <span class="label-count">1566</span>
  </div>
  <div class="label" data-s="RHYTHM">
  <a class="label-link label-color-10" href="/tag/1752/">🎶 Rhythm</a>
  <span class="label-count">1464</span>
  </div>
  <div class="label" data-s="ANIMATION &amp; MODELING">
  <a class="label-link label-color-11" href="/tag/872/">📏 Animation &amp; Modeling</a>
  <span class="label-count">1306</span>
  </div>
  <div class="label" data-s="3D FIGHTER">
  <a class="label-link label-color-12" href="/tag/6506/">🤼 3D Fighter</a>
  <span class="label-count">1234</span>
  </div>
  <div class="label" data-s="GRAND STRATEGY">
  <a class="label-link label-color-0" href="/tag/4364/">🛡️ Grand Strategy</a>
  <span class="label-count">1214</span>
  </div>
  <div class="label" data-s="SPACE SIM">
  <a class="label-link label-color-1" href="/tag/16598/">🚀 Space Sim</a>
  <span class="label-count">1214</span>
  </div>
  <div class="label" data-s="MMORPG">
  <a class="label-link label-color-2" href="/tag/1754/">🏪 MMORPG</a>
  <span class="label-count">1136</span>
  </div>
  <div class="label" data-s="FARMING SIM">
  <a class="label-link label-color-3" href="/tag/87918/">🌽 Farming Sim</a>
  <span class="label-count">1127</span>
  </div>
  <div class="label" data-s="ESPORTS">
  <a class="label-link label-color-4" href="/tag/5055/">💦 eSports</a>
  <span class="label-count">1100</span>
  </div>
  <div class="label" data-s="COLONY SIM">
  <a class="label-link label-color-5" href="/tag/220585/">🛖 Colony Sim</a>
  <span class="label-count">1092</span>
  </div>
  <div class="label" data-s="BATTLE ROYALE">
  <a class="label-link label-color-6" href="/tag/176981/">🌪️ Battle Royale</a>
  <span class="label-count">1072</span>
  </div>
  <div class="label" data-s="WORD GAME">
  <a class="label-link label-color-7" href="/tag/24003/">📚 Word Game</a>
  <span class="label-count">1007</span>
  </div>
  <div class="label" data-s="AUDIO PRODUCTION">
  <a class="label-link label-color-8" href="/tag/1027/">🎶 Audio Production</a>
  <span class="label-count">881</span>
  </div>
  <div class="label" data-s="VIDEO PRODUCTION">
  <a class="label-link label-color-9" href="/tag/784/">📽 Video Production</a>
  <span class="label-count">849</span>
  </div>
  <div class="label" data-s="AUTO BATTLER">
  <a class="label-link label-color-10" href="/tag/1084988/">🧼 Auto Battler</a>
  <span class="label-count">847</span>
  </div>
  <div class="label" data-s="GOD GAME">
  <a class="label-link label-color-11" href="/tag/5300/">🌌 God Game</a>
  <span class="label-count">712</span>
  </div>
  <div class="label" data-s="4X">
  <a class="label-link label-color-12" href="/tag/1670/">🗺️ 4X</a>
  <span class="label-count">664</span>
  </div>
  <div class="label" data-s="MOBA">
  <a class="label-link label-color-0" href="/tag/1718/">💢 MOBA</a>
  <span class="label-count">583</span>
  </div>
  <div class="label" data-s="PHOTO EDITING">
  <a class="label-link label-color-1" href="/tag/809/">📷 Photo Editing</a>
  <span class="label-count">463</span>
  </div>
  <div class="label" data-s="TRIVIA">
  <a class="label-link label-color-2" href="/tag/10437/">🤓 Trivia</a>
  <span class="label-count">412</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="feature"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Features</h2>
  <div class="taglist" style="grid-template-rows:repeat(17, min-content)">
  <div class="label" data-s="STORY RICH">
  <a class="label-link label-color-3" href="/tag/1742/">📚 Story Rich</a>
  <span class="label-count">19151</span>
  </div>
  <div class="label" data-s="COMBAT">
  <a class="label-link label-color-4" href="/tag/3993/">⚔️ Combat</a>
  <span class="label-count">11076</span>
  </div>
  <div class="label" data-s="FEMALE PROTAGONIST">
  <a class="label-link label-color-5" href="/tag/7208/">👩 Female Protagonist</a>
  <span class="label-count">10620</span>
  </div>
  <div class="label" data-s="CONTROLLER">
  <a class="label-link label-color-6" href="/tag/7481/">🎮 Controller</a>
  <span class="label-count">9597</span>
  </div>
  <div class="label" data-s="OPEN WORLD">
  <a class="label-link label-color-7" href="/tag/1695/">🌍 Open World</a>
  <span class="label-count">9114</span>
  </div>
  <div class="label" data-s="CHOICES MATTER">
  <a class="label-link label-color-8" href="/tag/6426/">🧞 Choices Matter</a>
  <span class="label-count">8585</span>
  </div>
  <div class="label" data-s="PVP">
  <a class="label-link label-color-9" href="/tag/1775/">🥊 PvP</a>
  <span class="label-count">8331</span>
  </div>
  <div class="label" data-s="LINEAR">
  <a class="label-link label-color-10" href="/tag/7250/">📏 Linear</a>
  <span class="label-count">7678</span>
  </div>
  <div class="label" data-s="MULTIPLE ENDINGS">
  <a class="label-link label-color-11" href="/tag/6971/">🔚 Multiple Endings</a>
  <span class="label-count">7462</span>
  </div>
  <div class="label" data-s="PHYSICS">
  <a class="label-link label-color-12" href="/tag/3968/">🔋 Physics</a>
  <span class="label-count">7396</span>
  </div>
  <div class="label" data-s="PVE">
  <a class="label-link label-color-0" href="/tag/6730/">🌲 PvE</a>
  <span class="label-count">7245</span>
  </div>
  <div class="label" data-s="CHARACTER CUSTOMIZATION">
  <a class="label-link label-color-1" href="/tag/4747/">🦹 Character Customization</a>
  <span class="label-count">6920</span>
  </div>
  <div class="label" data-s="TABLETOP">
  <a class="label-link label-color-2" href="/tag/17389/">🃏 Tabletop</a>
  <span class="label-count">5104</span>
  </div>
  <div class="label" data-s="CRAFTING">
  <a class="label-link label-color-3" href="/tag/1702/">🔧 Crafting</a>
  <span class="label-count">4811</span>
  </div>
  <div class="label" data-s="PROCEDURAL GENERATION">
  <a class="label-link label-color-4" href="/tag/5125/">🔀 Procedural Generation</a>
  <span class="label-count">4727</span>
  </div>
  <div class="label" data-s="TURN-BASED COMBAT">
  <a class="label-link label-color-5" href="/tag/4325/">🛡️ Turn-Based Combat</a>
  <span class="label-count">4603</span>
  </div>
  <div class="label" data-s="TURN-BASED TACTICS">
  <a class="label-link label-color-6" href="/tag/14139/">🎲 Turn-Based Tactics</a>
  <span class="label-count">4484</span>
  </div>
  <div class="label" data-s="HACK AND SLASH">
  <a class="label-link label-color-7" href="/tag/1646/">🛡️ Hack and Slash</a>
  <span class="label-count">4336</span>
  </div>
  <div class="label" data-s="RESOURCE MANAGEMENT">
  <a class="label-link label-color-8" href="/tag/8945/">📊 Resource Management</a>
  <span class="label-count">4089</span>
  </div>
  <div class="label" data-s="BASE BUILDING">
  <a class="label-link label-color-9" href="/tag/7332/">🏠 Base Building</a>
  <span class="label-count">3701</span>
  </div>
  <div class="label" data-s="SCORE ATTACK">
  <a class="label-link label-color-10" href="/tag/5154/">🏅 Score Attack</a>
  <span class="label-count">3481</span>
  </div>
  <div class="label" data-s="TEXT-BASED">
  <a class="label-link label-color-11" href="/tag/31275/">📝 Text-Based</a>
  <span class="label-count">3266</span>
  </div>
  <div class="label" data-s="STEALTH">
  <a class="label-link label-color-12" href="/tag/1687/">🥷 Stealth</a>
  <span class="label-count">3227</span>
  </div>
  <div class="label" data-s="NARRATION">
  <a class="label-link label-color-0" href="/tag/5094/">📚 Narration</a>
  <span class="label-count">2993</span>
  </div>
  <div class="label" data-s="CONVERSATION">
  <a class="label-link label-color-1" href="/tag/15172/">🗣️ Conversation</a>
  <span class="label-count">2563</span>
  </div>
  <div class="label" data-s="NONLINEAR">
  <a class="label-link label-color-2" href="/tag/6869/">〰️ Nonlinear</a>
  <span class="label-count">2321</span>
  </div>
  <div class="label" data-s="PERMA DEATH">
  <a class="label-link label-color-3" href="/tag/1759/">☠️ Perma Death</a>
  <span class="label-count">2278</span>
  </div>
  <div class="label" data-s="TEAM-BASED">
  <a class="label-link label-color-4" href="/tag/5711/">👥 Team-Based</a>
  <span class="label-count">2196</span>
  </div>
  <div class="label" data-s="TUTORIAL">
  <a class="label-link label-color-5" href="/tag/12057/">🎓 Tutorial</a>
  <span class="label-count">2149</span>
  </div>
  <div class="label" data-s="ARTIFICIAL INTELLIGENCE">
  <a class="label-link label-color-6" href="/tag/7926/">🤖 Artificial Intelligence</a>
  <span class="label-count">1940</span>
  </div>
  <div class="label" data-s="DECKBUILDING">
  <a class="label-link label-color-7" href="/tag/32322/">🎴 Deckbuilding</a>
  <span class="label-count">1830</span>
  </div>
  <div class="label" data-s="LEVEL EDITOR">
  <a class="label-link label-color-8" href="/tag/8122/">📖 Level Editor</a>
  <span class="label-count">1690</span>
  </div>
  <div class="label" data-s="INVENTORY MANAGEMENT">
  <a class="label-link label-color-9" href="/tag/6276/">📦 Inventory Management</a>
  <span class="label-count">1659</span>
  </div>
  <div class="label" data-s="GRID-BASED MOVEMENT">
  <a class="label-link label-color-10" href="/tag/7569/">♟️ Grid-Based Movement</a>
  <span class="label-count">1555</span>
  </div>
  <div class="label" data-s="MODDABLE">
  <a class="label-link label-color-11" href="/tag/1669/">🛠️ Moddable</a>
  <span class="label-count">1418</span>
  </div>
  <div class="label" data-s="CLASS-BASED">
  <a class="label-link label-color-12" href="/tag/4155/">🏋️ Class-Based</a>
  <span class="label-count">1094</span>
  </div>
  <div class="label" data-s="VEHICULAR COMBAT">
  <a class="label-link label-color-0" href="/tag/11104/">🏎️ Vehicular Combat</a>
  <span class="label-count">1068</span>
  </div>
  <div class="label" data-s="AUTOMATION">
  <a class="label-link label-color-1" href="/tag/255534/">🤖 Automation</a>
  <span class="label-count">1054</span>
  </div>
  <div class="label" data-s="6DOF">
  <a class="label-link label-color-2" href="/tag/4835/">🚀 6DOF</a>
  <span class="label-count">1027</span>
  </div>
  <div class="label" data-s="GUN CUSTOMIZATION">
  <a class="label-link label-color-3" href="/tag/5765/">🔫 Gun Customization</a>
  <span class="label-count">1011</span>
  </div>
  <div class="label" data-s="BULLET TIME">
  <a class="label-link label-color-4" href="/tag/5796/">⏸️ Bullet Time</a>
  <span class="label-count">897</span>
  </div>
  <div class="label" data-s="TRADING">
  <a class="label-link label-color-5" href="/tag/4202/">💼 Trading</a>
  <span class="label-count">794</span>
  </div>
  <div class="label" data-s="TIME MANIPULATION">
  <a class="label-link label-color-6" href="/tag/6625/">⏳ Time Manipulation</a>
  <span class="label-count">790</span>
  </div>
  <div class="label" data-s="FMV">
  <a class="label-link label-color-7" href="/tag/18594/">📺 FMV</a>
  <span class="label-count">697</span>
  </div>
  <div class="label" data-s="HEX GRID">
  <a class="label-link label-color-8" href="/tag/1717/">🛑 Hex Grid</a>
  <span class="label-count">696</span>
  </div>
  <div class="label" data-s="QUICK-TIME EVENTS">
  <a class="label-link label-color-9" href="/tag/4559/">⚡ Quick-Time Events</a>
  <span class="label-count">691</span>
  </div>
  <div class="label" data-s="DYNAMIC NARRATION">
  <a class="label-link label-color-10" href="/tag/9592/">📚 Dynamic Narration</a>
  <span class="label-count">662</span>
  </div>
  <div class="label" data-s="NAVAL COMBAT">
  <a class="label-link label-color-11" href="/tag/4994/">🚢 Naval Combat</a>
  <span class="label-count">397</span>
  </div>
  <div class="label" data-s="MUSIC-BASED PROCEDURAL GENERATION">
  <a class="label-link label-color-12" href="/tag/8253/">🤖 Music-Based Procedural Generation</a>
  <span class="label-count">353</span>
  </div>
  <div class="label" data-s="ASYMMETRIC VR">
  <a class="label-link label-color-0" href="/tag/856791/">🥽 Asymmetric VR</a>
  <span class="label-count">189</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="sim"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Simulation</h2>
  <div class="taglist" style="grid-template-rows:repeat(32, min-content)">
  <div class="label" data-s="SIMULATION">
  <a class="label-link label-color-1" href="/tag/599/">🖥️ Simulation</a>
  <span class="label-count">37494</span>
  </div>
  <div class="label" data-s="SURVIVAL">
  <a class="label-link label-color-2" href="/tag/1662/">🌲 Survival</a>
  <span class="label-count">8788</span>
  </div>
  <div class="label" data-s="SPORTS">
  <a class="label-link label-color-3" href="/tag/701/">🏅 Sports</a>
  <span class="label-count">7856</span>
  </div>
  <div class="label" data-s="PHYSICS">
  <a class="label-link label-color-4" href="/tag/3968/">🔋 Physics</a>
  <span class="label-count">7396</span>
  </div>
  <div class="label" data-s="MEDIEVAL">
  <a class="label-link label-color-5" href="/tag/4172/">🏰 Medieval</a>
  <span class="label-count">6732</span>
  </div>
  <div class="label" data-s="RACING">
  <a class="label-link label-color-6" href="/tag/699/">🏁 Racing</a>
  <span class="label-count">6580</span>
  </div>
  <div class="label" data-s="SPACE">
  <a class="label-link label-color-7" href="/tag/1755/">🌠 Space</a>
  <span class="label-count">6032</span>
  </div>
  <div class="label" data-s="BUILDING">
  <a class="label-link label-color-8" href="/tag/1643/">🏠 Building</a>
  <span class="label-count">5752</span>
  </div>
  <div class="label" data-s="MANAGEMENT">
  <a class="label-link label-color-9" href="/tag/12472/">💼 Management</a>
  <span class="label-count">5623</span>
  </div>
  <div class="label" data-s="ROMANCE">
  <a class="label-link label-color-10" href="/tag/4947/">💘 Romance</a>
  <span class="label-count">4830</span>
  </div>
  <div class="label" data-s="CRAFTING">
  <a class="label-link label-color-11" href="/tag/1702/">🔧 Crafting</a>
  <span class="label-count">4811</span>
  </div>
  <div class="label" data-s="IMMERSIVE SIM">
  <a class="label-link label-color-12" href="/tag/9204/">🌎 Immersive Sim</a>
  <span class="label-count">4644</span>
  </div>
  <div class="label" data-s="NATURE">
  <a class="label-link label-color-0" href="/tag/30358/">🌿 Nature</a>
  <span class="label-count">3993</span>
  </div>
  <div class="label" data-s="DATING SIM">
  <a class="label-link label-color-1" href="/tag/9551/">💘 Dating Sim</a>
  <span class="label-count">3930</span>
  </div>
  <div class="label" data-s="BASE BUILDING">
  <a class="label-link label-color-2" href="/tag/7332/">🏠 Base Building</a>
  <span class="label-count">3701</span>
  </div>
  <div class="label" data-s="WAR">
  <a class="label-link label-color-3" href="/tag/1678/">⚔️ War</a>
  <span class="label-count">3693</span>
  </div>
  <div class="label" data-s="WALKING SIMULATOR">
  <a class="label-link label-color-4" href="/tag/5900/">🚶 Walking Simulator</a>
  <span class="label-count">3631</span>
  </div>
  <div class="label" data-s="STEALTH">
  <a class="label-link label-color-5" href="/tag/1687/">🥷 Stealth</a>
  <span class="label-count">3227</span>
  </div>
  <div class="label" data-s="MILITARY">
  <a class="label-link label-color-6" href="/tag/4168/">🪖 Military</a>
  <span class="label-count">2977</span>
  </div>
  <div class="label" data-s="LIFE SIM">
  <a class="label-link label-color-7" href="/tag/10235/">🧫 Life Sim</a>
  <span class="label-count">2918</span>
  </div>
  <div class="label" data-s="INVESTIGATION">
  <a class="label-link label-color-8" href="/tag/8369/">🔍 Investigation</a>
  <span class="label-count">2880</span>
  </div>
  <div class="label" data-s="ROBOTS">
  <a class="label-link label-color-9" href="/tag/5752/">🤖 Robots</a>
  <span class="label-count">2650</span>
  </div>
  <div class="label" data-s="DETECTIVE">
  <a class="label-link label-color-10" href="/tag/5613/">🕵️ Detective</a>
  <span class="label-count">2635</span>
  </div>
  <div class="label" data-s="DRIVING">
  <a class="label-link label-color-11" href="/tag/1644/">🚗 Driving</a>
  <span class="label-count">2459</span>
  </div>
  <div class="label" data-s="ECONOMY">
  <a class="label-link label-color-12" href="/tag/4695/">🏦 Economy</a>
  <span class="label-count">2444</span>
  </div>
  <div class="label" data-s="CITY BUILDER">
  <a class="label-link label-color-0" href="/tag/4328/">🏙️ City Builder</a>
  <span class="label-count">2245</span>
  </div>
  <div class="label" data-s="FLIGHT">
  <a class="label-link label-color-1" href="/tag/15045/">✈️ Flight</a>
  <span class="label-count">2173</span>
  </div>
  <div class="label" data-s="ARTIFICIAL INTELLIGENCE">
  <a class="label-link label-color-2" href="/tag/7926/">🤖 Artificial Intelligence</a>
  <span class="label-count">1940</span>
  </div>
  <div class="label" data-s="PARKOUR">
  <a class="label-link label-color-3" href="/tag/4036/">🧗 Parkour</a>
  <span class="label-count">1604</span>
  </div>
  <div class="label" data-s="AUTOMOBILE SIM">
  <a class="label-link label-color-4" href="/tag/1100687/">🚗 Automobile Sim</a>
  <span class="label-count">1566</span>
  </div>
  <div class="label" data-s="CRIME">
  <a class="label-link label-color-5" href="/tag/6378/">🚨 Crime</a>
  <span class="label-count">1524</span>
  </div>
  <div class="label" data-s="GAME DEVELOPMENT">
  <a class="label-link label-color-6" href="/tag/13906/">🛠️ Game Development</a>
  <span class="label-count">1481</span>
  </div>
  <div class="label" data-s="SPACE SIM">
  <a class="label-link label-color-7" href="/tag/16598/">🚀 Space Sim</a>
  <span class="label-count">1214</span>
  </div>
  <div class="label" data-s="SCIENCE">
  <a class="label-link label-color-8" href="/tag/5794/">🔬 Science</a>
  <span class="label-count">1182</span>
  </div>
  <div class="label" data-s="WORLD WAR II">
  <a class="label-link label-color-9" href="/tag/4150/">🪂 World War II</a>
  <span class="label-count">1146</span>
  </div>
  <div class="label" data-s="FARMING SIM">
  <a class="label-link label-color-10" href="/tag/87918/">🌽 Farming Sim</a>
  <span class="label-count">1127</span>
  </div>
  <div class="label" data-s="SWORDPLAY">
  <a class="label-link label-color-11" href="/tag/4608/">🤺 Swordplay</a>
  <span class="label-count">1124</span>
  </div>
  <div class="label" data-s="COLONY SIM">
  <a class="label-link label-color-12" href="/tag/220585/">🛖 Colony Sim</a>
  <span class="label-count">1092</span>
  </div>
  <div class="label" data-s="CAPITALISM">
  <a class="label-link label-color-0" href="/tag/4845/">🤑 Capitalism</a>
  <span class="label-count">1075</span>
  </div>
  <div class="label" data-s="AUTOMATION">
  <a class="label-link label-color-1" href="/tag/255534/">🤖 Automation</a>
  <span class="label-count">1054</span>
  </div>
  <div class="label" data-s="AGRICULTURE">
  <a class="label-link label-color-2" href="/tag/22602/">🌾 Agriculture</a>
  <span class="label-count">887</span>
  </div>
  <div class="label" data-s="MECHS">
  <a class="label-link label-color-3" href="/tag/4821/">🤖 Mechs</a>
  <span class="label-count">839</span>
  </div>
  <div class="label" data-s="MARTIAL ARTS">
  <a class="label-link label-color-4" href="/tag/6915/">🥋 Martial Arts</a>
  <span class="label-count">831</span>
  </div>
  <div class="label" data-s="TRADING">
  <a class="label-link label-color-5" href="/tag/4202/">💼 Trading</a>
  <span class="label-count">794</span>
  </div>
  <div class="label" data-s="PIRATES">
  <a class="label-link label-color-6" href="/tag/1681/">🏴‍☠ Pirates</a>
  <span class="label-count">746</span>
  </div>
  <div class="label" data-s="UNDERGROUND">
  <a class="label-link label-color-7" href="/tag/21006/">🕳️ Underground</a>
  <span class="label-count">720</span>
  </div>
  <div class="label" data-s="TANKS">
  <a class="label-link label-color-8" href="/tag/13276/">🚜 Tanks</a>
  <span class="label-count">709</span>
  </div>
  <div class="label" data-s="MINING">
  <a class="label-link label-color-9" href="/tag/5981/">⛏️ Mining</a>
  <span class="label-count">692</span>
  </div>
  <div class="label" data-s="POLITICAL">
  <a class="label-link label-color-10" href="/tag/4853/">🗳️ Political</a>
  <span class="label-count">689</span>
  </div>
  <div class="label" data-s="NINJA">
  <a class="label-link label-color-11" href="/tag/1688/">🥷 Ninja</a>
  <span class="label-count">679</span>
  </div>
  <div class="label" data-s="HUNTING">
  <a class="label-link label-color-12" href="/tag/9564/">🏹 Hunting</a>
  <span class="label-count">658</span>
  </div>
  <div class="label" data-s="UNDERWATER">
  <a class="label-link label-color-0" href="/tag/9157/">🌊 Underwater</a>
  <span class="label-count">632</span>
  </div>
  <div class="label" data-s="DINOSAURS">
  <a class="label-link label-color-1" href="/tag/5160/">🦖 Dinosaurs</a>
  <span class="label-count">627</span>
  </div>
  <div class="label" data-s="FISHING">
  <a class="label-link label-color-2" href="/tag/15564/">🎣 Fishing</a>
  <span class="label-count">579</span>
  </div>
  <div class="label" data-s="HACKING">
  <a class="label-link label-color-3" href="/tag/5502/">🔌 Hacking</a>
  <span class="label-count">571</span>
  </div>
  <div class="label" data-s="TRAINS">
  <a class="label-link label-color-4" href="/tag/1616/">🚂 Trains</a>
  <span class="label-count">556</span>
  </div>
  <div class="label" data-s="PROGRAMMING">
  <a class="label-link label-color-5" href="/tag/5432/">💻 Programming</a>
  <span class="label-count">547</span>
  </div>
  <div class="label" data-s="POLITICAL SIM">
  <a class="label-link label-color-6" href="/tag/26921/">🏛️ Political Sim</a>
  <span class="label-count">542</span>
  </div>
  <div class="label" data-s="TRANSPORTATION">
  <a class="label-link label-color-7" href="/tag/10383/">🚌 Transportation</a>
  <span class="label-count">519</span>
  </div>
  <div class="label" data-s="NAVAL">
  <a class="label-link label-color-8" href="/tag/6910/">🚢 Naval</a>
  <span class="label-count">507</span>
  </div>
  <div class="label" data-s="POLITICS">
  <a class="label-link label-color-9" href="/tag/4754/">🗳️ Politics</a>
  <span class="label-count">494</span>
  </div>
  <div class="label" data-s="DIPLOMACY">
  <a class="label-link label-color-10" href="/tag/6310/">🤝 Diplomacy</a>
  <span class="label-count">463</span>
  </div>
  <div class="label" data-s="COLD WAR">
  <a class="label-link label-color-11" href="/tag/5179/">☢️ Cold War</a>
  <span class="label-count">433</span>
  </div>
  <div class="label" data-s="HEIST">
  <a class="label-link label-color-12" href="/tag/1680/">💸 Heist</a>
  <span class="label-count">422</span>
  </div>
  <div class="label" data-s="ARCHERY">
  <a class="label-link label-color-0" href="/tag/13382/">🎯 Archery</a>
  <span class="label-count">422</span>
  </div>
  <div class="label" data-s="SAILING">
  <a class="label-link label-color-1" href="/tag/13577/">⛵ Sailing</a>
  <span class="label-count">374</span>
  </div>
  <div class="label" data-s="FOOTBALL (SOCCER)">
  <a class="label-link label-color-2" href="/tag/1254546/">⚽ Football (Soccer)</a>
  <span class="label-count">352</span>
  </div>
  <div class="label" data-s="SNIPER">
  <a class="label-link label-color-3" href="/tag/7423/">🏹 Sniper</a>
  <span class="label-count">291</span>
  </div>
  <div class="label" data-s="MARS">
  <a class="label-link label-color-4" href="/tag/6702/">🔴 Mars</a>
  <span class="label-count">287</span>
  </div>
  <div class="label" data-s="BOXING">
  <a class="label-link label-color-5" href="/tag/12190/">🥊 Boxing</a>
  <span class="label-count">263</span>
  </div>
  <div class="label" data-s="JET">
  <a class="label-link label-color-6" href="/tag/92092/">✈️ Jet</a>
  <span class="label-count">262</span>
  </div>
  <div class="label" data-s="MOTORBIKE">
  <a class="label-link label-color-7" href="/tag/198913/">🏍️ Motorbike</a>
  <span class="label-count">251</span>
  </div>
  <div class="label" data-s="GOLF">
  <a class="label-link label-color-8" href="/tag/7038/">🏌️ Golf</a>
  <span class="label-count">244</span>
  </div>
  <div class="label" data-s="OUTBREAK SIM">
  <a class="label-link label-color-9" href="/tag/1100686/">🦠 Outbreak Sim</a>
  <span class="label-count">242</span>
  </div>
  <div class="label" data-s="WORLD WAR I">
  <a class="label-link label-color-10" href="/tag/5382/">🎖️ World War I</a>
  <span class="label-count">234</span>
  </div>
  <div class="label" data-s="BIKES">
  <a class="label-link label-color-11" href="/tag/123332/">🚲 Bikes</a>
  <span class="label-count">230</span>
  </div>
  <div class="label" data-s="MEDICAL SIM">
  <a class="label-link label-color-12" href="/tag/1100688/">🩺 Medical Sim</a>
  <span class="label-count">229</span>
  </div>
  <div class="label" data-s="SUBMARINE">
  <a class="label-link label-color-0" href="/tag/19780/">🤿 Submarine</a>
  <span class="label-count">201</span>
  </div>
  <div class="label" data-s="BASKETBALL">
  <a class="label-link label-color-1" href="/tag/1746/">🏀 Basketball</a>
  <span class="label-count">191</span>
  </div>
  <div class="label" data-s="FOOTBALL (AMERICAN)">
  <a class="label-link label-color-2" href="/tag/1254552/">🏈 Football (American)</a>
  <span class="label-count">158</span>
  </div>
  <div class="label" data-s="MINI GOLF">
  <a class="label-link label-color-3" href="/tag/22955/">⛳ Mini Golf</a>
  <span class="label-count">157</span>
  </div>
  <div class="label" data-s="SKATEBOARDING">
  <a class="label-link label-color-4" href="/tag/1753/">🛹 Skateboarding</a>
  <span class="label-count">132</span>
  </div>
  <div class="label" data-s="WRESTLING">
  <a class="label-link label-color-5" href="/tag/47827/">🤼 Wrestling</a>
  <span class="label-count">130</span>
  </div>
  <div class="label" data-s="POOL">
  <a class="label-link label-color-6" href="/tag/17927/">🏊 Pool</a>
  <span class="label-count">113</span>
  </div>
  <div class="label" data-s="TENNIS">
  <a class="label-link label-color-7" href="/tag/5914/">🎾 Tennis</a>
  <span class="label-count">111</span>
  </div>
  <div class="label" data-s="BASEBALL">
  <a class="label-link label-color-8" href="/tag/5727/">⚾ Baseball</a>
  <span class="label-count">107</span>
  </div>
  <div class="label" data-s="CYCLING">
  <a class="label-link label-color-9" href="/tag/19568/">🚴 Cycling</a>
  <span class="label-count">107</span>
  </div>
  <div class="label" data-s="MOTOCROSS">
  <a class="label-link label-color-10" href="/tag/15868/">🚵🏿 Motocross</a>
  <span class="label-count">95</span>
  </div>
  <div class="label" data-s="SKATING">
  <a class="label-link label-color-11" href="/tag/96359/">🛹 Skating</a>
  <span class="label-count">95</span>
  </div>
  <div class="label" data-s="HOCKEY">
  <a class="label-link label-color-12" href="/tag/324176/">🏒 Hockey</a>
  <span class="label-count">76</span>
  </div>
  <div class="label" data-s="BOWLING">
  <a class="label-link label-color-0" href="/tag/7328/">🎳 Bowling</a>
  <span class="label-count">71</span>
  </div>
  <div class="label" data-s="SNOWBOARDING">
  <a class="label-link label-color-1" href="/tag/28444/">🏂 Snowboarding</a>
  <span class="label-count">67</span>
  </div>
  <div class="label" data-s="SKIING">
  <a class="label-link label-color-2" href="/tag/7309/">⛷ Skiing</a>
  <span class="label-count">63</span>
  </div>
  <div class="label" data-s="BMX">
  <a class="label-link label-color-3" href="/tag/252854/">🚲 BMX</a>
  <span class="label-count">55</span>
  </div>
  <div class="label" data-s="ATV">
  <a class="label-link label-color-4" href="/tag/129761/">🛻 ATV</a>
  <span class="label-count">48</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="video_genre"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Video Genres</h2>
  <div class="taglist" style="grid-template-rows:repeat(7, min-content)">
  <div class="label" data-s="ACTION">
  <a class="label-link label-color-5" href="/tag/19/">💥 Action</a>
  <span class="label-count">67519</span>
  </div>
  <div class="label" data-s="FANTASY">
  <a class="label-link label-color-6" href="/tag/1684/">🎭 Fantasy</a>
  <span class="label-count">19570</span>
  </div>
  <div class="label" data-s="ACTION-ADVENTURE">
  <a class="label-link label-color-7" href="/tag/4106/">🌄 Action-Adventure</a>
  <span class="label-count">13459</span>
  </div>
  <div class="label" data-s="ANIME">
  <a class="label-link label-color-8" href="/tag/4085/">🌸 Anime</a>
  <span class="label-count">13267</span>
  </div>
  <div class="label" data-s="SCI-FI">
  <a class="label-link label-color-9" href="/tag/3942/">🚀 Sci-fi</a>
  <span class="label-count">12212</span>
  </div>
  <div class="label" data-s="HORROR">
  <a class="label-link label-color-10" href="/tag/1667/">😱 Horror</a>
  <span class="label-count">11568</span>
  </div>
  <div class="label" data-s="COMEDY">
  <a class="label-link label-color-11" href="/tag/1719/">🤡 Comedy</a>
  <span class="label-count">8090</span>
  </div>
  <div class="label" data-s="VR">
  <a class="label-link label-color-12" href="/tag/21978/">🥽 VR</a>
  <span class="label-count">7694</span>
  </div>
  <div class="label" data-s="DRAMA">
  <a class="label-link label-color-0" href="/tag/5984/">🎭 Drama</a>
  <span class="label-count">5032</span>
  </div>
  <div class="label" data-s="DESIGN &amp; ILLUSTRATION">
  <a class="label-link label-color-1" href="/tag/84/">🎨 Design &amp; Illustration</a>
  <span class="label-count">3961</span>
  </div>
  <div class="label" data-s="SHORT">
  <a class="label-link label-color-2" href="/tag/4234/">🤏 Short</a>
  <span class="label-count">2285</span>
  </div>
  <div class="label" data-s="TUTORIAL">
  <a class="label-link label-color-3" href="/tag/12057/">🎓 Tutorial</a>
  <span class="label-count">2149</span>
  </div>
  <div class="label" data-s="MOVIE">
  <a class="label-link label-color-4" href="/tag/4700/">🍿 Movie</a>
  <span class="label-count">1588</span>
  </div>
  <div class="label" data-s="GAME DEVELOPMENT">
  <a class="label-link label-color-5" href="/tag/13906/">🛠️ Game Development</a>
  <span class="label-count">1481</span>
  </div>
  <div class="label" data-s="ANIMATION &amp; MODELING">
  <a class="label-link label-color-6" href="/tag/872/">📏 Animation &amp; Modeling</a>
  <span class="label-count">1306</span>
  </div>
  <div class="label" data-s="EPISODIC">
  <a class="label-link label-color-7" href="/tag/4242/">🔢 Episodic</a>
  <span class="label-count">579</span>
  </div>
  <div class="label" data-s="FOREIGN">
  <a class="label-link label-color-8" href="/tag/51306/">🌍 Foreign</a>
  <span class="label-count">330</span>
  </div>
  <div class="label" data-s="360 VIDEO">
  <a class="label-link label-color-9" href="/tag/776177/">🌏 360 Video</a>
  <span class="label-count">300</span>
  </div>
  <div class="label" data-s="DOCUMENTARY">
  <a class="label-link label-color-10" href="/tag/15339/">📺 Documentary</a>
  <span class="label-count">207</span>
  </div>
  <div class="label" data-s="GAMING">
  <a class="label-link label-color-11" href="/tag/150626/">🎮 Gaming</a>
  <span class="label-count">176</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="subgenre"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Sub-Genres</h2>
  <div class="taglist" style="grid-template-rows:repeat(18, min-content)">
  <div class="label" data-s="EXPLORATION">
  <a class="label-link label-color-12" href="/tag/3834/">🗺 Exploration</a>
  <span class="label-count">18216</span>
  </div>
  <div class="label" data-s="2D PLATFORMER">
  <a class="label-link label-color-0" href="/tag/5379/">📺 2D Platformer</a>
  <span class="label-count">8333</span>
  </div>
  <div class="label" data-s="FPS">
  <a class="label-link label-color-1" href="/tag/1663/">🔫 FPS</a>
  <span class="label-count">7614</span>
  </div>
  <div class="label" data-s="SHOOT 'EM UP">
  <a class="label-link label-color-2" href="/tag/4255/">🕹 Shoot 'Em Up</a>
  <span class="label-count">6209</span>
  </div>
  <div class="label" data-s="ROGUE-LITE">
  <a class="label-link label-color-3" href="/tag/3959/">👻 Rogue-lite</a>
  <span class="label-count">5786</span>
  </div>
  <div class="label" data-s="SIDE SCROLLER">
  <a class="label-link label-color-4" href="/tag/3798/">📺 Side Scroller</a>
  <span class="label-count">5544</span>
  </div>
  <div class="label" data-s="3D PLATFORMER">
  <a class="label-link label-color-5" href="/tag/5395/">🦘 3D Platformer</a>
  <span class="label-count">5212</span>
  </div>
  <div class="label" data-s="PUZZLE-PLATFORMER">
  <a class="label-link label-color-6" href="/tag/5537/">🧩 Puzzle-Platformer</a>
  <span class="label-count">5090</span>
  </div>
  <div class="label" data-s="CHOOSE YOUR OWN ADVENTURE">
  <a class="label-link label-color-7" href="/tag/4486/">🧚 Choose Your Own Adventure</a>
  <span class="label-count">4968</span>
  </div>
  <div class="label" data-s="HIDDEN OBJECT">
  <a class="label-link label-color-8" href="/tag/1738/">🔍 Hidden Object</a>
  <span class="label-count">4679</span>
  </div>
  <div class="label" data-s="IMMERSIVE SIM">
  <a class="label-link label-color-9" href="/tag/9204/">🌎 Immersive Sim</a>
  <span class="label-count">4644</span>
  </div>
  <div class="label" data-s="ACTION ROGUELIKE">
  <a class="label-link label-color-10" href="/tag/42804/">👻 Action Roguelike</a>
  <span class="label-count">4590</span>
  </div>
  <div class="label" data-s="TURN-BASED TACTICS">
  <a class="label-link label-color-11" href="/tag/14139/">🎲 Turn-Based Tactics</a>
  <span class="label-count">4484</span>
  </div>
  <div class="label" data-s="BULLET HELL">
  <a class="label-link label-color-12" href="/tag/4885/">💥 Bullet Hell</a>
  <span class="label-count">4354</span>
  </div>
  <div class="label" data-s="HACK AND SLASH">
  <a class="label-link label-color-0" href="/tag/1646/">🛡️ Hack and Slash</a>
  <span class="label-count">4336</span>
  </div>
  <div class="label" data-s="DUNGEON CRAWLER">
  <a class="label-link label-color-1" href="/tag/1720/">🏰 Dungeon Crawler</a>
  <span class="label-count">3851</span>
  </div>
  <div class="label" data-s="TOP-DOWN SHOOTER">
  <a class="label-link label-color-2" href="/tag/4637/">🌟 Top-Down Shooter</a>
  <span class="label-count">3396</span>
  </div>
  <div class="label" data-s="THIRD-PERSON SHOOTER">
  <a class="label-link label-color-3" href="/tag/3814/">🔫 Third-Person Shooter</a>
  <span class="label-count">2999</span>
  </div>
  <div class="label" data-s="CLICKER">
  <a class="label-link label-color-4" href="/tag/379975/">👆 Clicker</a>
  <span class="label-count">2871</span>
  </div>
  <div class="label" data-s="PRECISION PLATFORMER">
  <a class="label-link label-color-5" href="/tag/3877/">🕹 Precision Platformer</a>
  <span class="label-count">2623</span>
  </div>
  <div class="label" data-s="REAL TIME TACTICS">
  <a class="label-link label-color-6" href="/tag/3813/">▶️ Real Time Tactics</a>
  <span class="label-count">2494</span>
  </div>
  <div class="label" data-s="ARENA SHOOTER">
  <a class="label-link label-color-7" href="/tag/5547/">🌟 Arena Shooter</a>
  <span class="label-count">2468</span>
  </div>
  <div class="label" data-s="TIME MANAGEMENT">
  <a class="label-link label-color-8" href="/tag/16689/">🕒 Time Management</a>
  <span class="label-count">2391</span>
  </div>
  <div class="label" data-s="FLIGHT">
  <a class="label-link label-color-9" href="/tag/15045/">✈️ Flight</a>
  <span class="label-count">2173</span>
  </div>
  <div class="label" data-s="TACTICAL RPG">
  <a class="label-link label-color-10" href="/tag/21725/">🛡️ Tactical RPG</a>
  <span class="label-count">2163</span>
  </div>
  <div class="label" data-s="METROIDVANIA">
  <a class="label-link label-color-11" href="/tag/1628/">💨 Metroidvania</a>
  <span class="label-count">2083</span>
  </div>
  <div class="label" data-s="COLLECTATHON">
  <a class="label-link label-color-12" href="/tag/5652/">📦 Collectathon</a>
  <span class="label-count">2079</span>
  </div>
  <div class="label" data-s="WARGAME">
  <a class="label-link label-color-0" href="/tag/4684/">🔵 Wargame</a>
  <span class="label-count">2053</span>
  </div>
  <div class="label" data-s="RUNNER">
  <a class="label-link label-color-1" href="/tag/8666/">🏃 Runner</a>
  <span class="label-count">1882</span>
  </div>
  <div class="label" data-s="SOULS-LIKE">
  <a class="label-link label-color-2" href="/tag/29482/">💥 Souls-like</a>
  <span class="label-count">1829</span>
  </div>
  <div class="label" data-s="IDLER">
  <a class="label-link label-color-3" href="/tag/615955/">🕒 Idler</a>
  <span class="label-count">1820</span>
  </div>
  <div class="label" data-s="CARD BATTLER">
  <a class="label-link label-color-4" href="/tag/791774/">🃏 Card Battler</a>
  <span class="label-count">1609</span>
  </div>
  <div class="label" data-s="CRPG">
  <a class="label-link label-color-5" href="/tag/4474/">💻 CRPG</a>
  <span class="label-count">1579</span>
  </div>
  <div class="label" data-s="TWIN STICK SHOOTER">
  <a class="label-link label-color-6" href="/tag/4758/">🕹️ Twin Stick Shooter</a>
  <span class="label-count">1528</span>
  </div>
  <div class="label" data-s="MATCH 3">
  <a class="label-link label-color-7" href="/tag/1665/">3️⃣ Match 3</a>
  <span class="label-count">1304</span>
  </div>
  <div class="label" data-s="CREATURE COLLECTOR">
  <a class="label-link label-color-8" href="/tag/916648/">🦎 Creature Collector</a>
  <span class="label-count">1269</span>
  </div>
  <div class="label" data-s="MYSTERY DUNGEON">
  <a class="label-link label-color-9" href="/tag/198631/">🏰 Mystery Dungeon</a>
  <span class="label-count">1011</span>
  </div>
  <div class="label" data-s="HERO SHOOTER">
  <a class="label-link label-color-10" href="/tag/620519/">🔫 Hero Shooter</a>
  <span class="label-count">961</span>
  </div>
  <div class="label" data-s="SOLITAIRE">
  <a class="label-link label-color-11" href="/tag/13070/">♠️ Solitaire</a>
  <span class="label-count">917</span>
  </div>
  <div class="label" data-s="COMBAT RACING">
  <a class="label-link label-color-12" href="/tag/4102/">🏎️ Combat Racing</a>
  <span class="label-count">893</span>
  </div>
  <div class="label" data-s="SPECTACLE FIGHTER">
  <a class="label-link label-color-0" href="/tag/4777/">🤸 Spectacle fighter</a>
  <span class="label-count">890</span>
  </div>
  <div class="label" data-s="LOOTER SHOOTER">
  <a class="label-link label-color-1" href="/tag/353880/">🎒 Looter Shooter</a>
  <span class="label-count">857</span>
  </div>
  <div class="label" data-s="SOKOBAN">
  <a class="label-link label-color-2" href="/tag/1730/">📦 Sokoban</a>
  <span class="label-count">694</span>
  </div>
  <div class="label" data-s="ACTION RTS">
  <a class="label-link label-color-3" href="/tag/1723/">💥 Action RTS</a>
  <span class="label-count">692</span>
  </div>
  <div class="label" data-s="TRADING CARD GAME">
  <a class="label-link label-color-4" href="/tag/9271/">🤝 Trading Card Game</a>
  <span class="label-count">652</span>
  </div>
  <div class="label" data-s="POLITICAL SIM">
  <a class="label-link label-color-5" href="/tag/26921/">🏛️ Political Sim</a>
  <span class="label-count">542</span>
  </div>
  <div class="label" data-s="TYPING">
  <a class="label-link label-color-6" href="/tag/1674/">⌨️ Typing</a>
  <span class="label-count">468</span>
  </div>
  <div class="label" data-s="TRADITIONAL ROGUELIKE">
  <a class="label-link label-color-7" href="/tag/454187/">👻 Traditional Roguelike</a>
  <span class="label-count">399</span>
  </div>
  <div class="label" data-s="ON-RAILS SHOOTER">
  <a class="label-link label-color-8" href="/tag/56690/">🛤️ On-Rails Shooter</a>
  <span class="label-count">379</span>
  </div>
  <div class="label" data-s="BOOMER SHOOTER">
  <a class="label-link label-color-9" href="/tag/1023537/">👴 Boomer Shooter</a>
  <span class="label-count">275</span>
  </div>
  <div class="label" data-s="SPELLING">
  <a class="label-link label-color-10" href="/tag/71389/">🔤 Spelling</a>
  <span class="label-count">271</span>
  </div>
  <div class="label" data-s="OUTBREAK SIM">
  <a class="label-link label-color-11" href="/tag/1100686/">🦠 Outbreak Sim</a>
  <span class="label-count">242</span>
  </div>
  <div class="label" data-s="MEDICAL SIM">
  <a class="label-link label-color-12" href="/tag/1100688/">🩺 Medical Sim</a>
  <span class="label-count">229</span>
  </div>
  <div class="label" data-s="ROGUEVANIA">
  <a class="label-link label-color-0" href="/tag/922563/">👻 Roguevania</a>
  <span class="label-count">214</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="players"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Players</h2>
  <div class="taglist" style="grid-template-rows:repeat(4, min-content)">
  <div class="label" data-s="SINGLEPLAYER">
  <a class="label-link label-color-1" href="/tag/4182/">👤 Singleplayer</a>
  <span class="label-count">64990</span>
  </div>
  <div class="label" data-s="MULTIPLAYER">
  <a class="label-link label-color-2" href="/tag/3859/">🕹️ Multiplayer</a>
  <span class="label-count">15614</span>
  </div>
  <div class="label" data-s="PVP">
  <a class="label-link label-color-3" href="/tag/1775/">🥊 PvP</a>
  <span class="label-count">8331</span>
  </div>
  <div class="label" data-s="CO-OP">
  <a class="label-link label-color-4" href="/tag/1685/">🤝 Co-op</a>
  <span class="label-count">7727</span>
  </div>
  <div class="label" data-s="ONLINE CO-OP">
  <a class="label-link label-color-5" href="/tag/3843/">👥 Online Co-Op</a>
  <span class="label-count">6226</span>
  </div>
  <div class="label" data-s="MASSIVELY MULTIPLAYER">
  <a class="label-link label-color-6" href="/tag/128/">🫶 Massively Multiplayer</a>
  <span class="label-count">5748</span>
  </div>
  <div class="label" data-s="LOCAL MULTIPLAYER">
  <a class="label-link label-color-7" href="/tag/7368/">📺 Local Multiplayer</a>
  <span class="label-count">4348</span>
  </div>
  <div class="label" data-s="LOCAL CO-OP">
  <a class="label-link label-color-8" href="/tag/3841/">👥 Local Co-Op</a>
  <span class="label-count">3159</span>
  </div>
  <div class="label" data-s="TEAM-BASED">
  <a class="label-link label-color-9" href="/tag/5711/">👥 Team-Based</a>
  <span class="label-count">2196</span>
  </div>
  <div class="label" data-s="4 PLAYER LOCAL">
  <a class="label-link label-color-10" href="/tag/4840/">4️⃣ 4 Player Local</a>
  <span class="label-count">1969</span>
  </div>
  <div class="label" data-s="CO-OP CAMPAIGN">
  <a class="label-link label-color-11" href="/tag/4508/">🤝 Co-op Campaign</a>
  <span class="label-count">726</span>
  </div>
  <div class="label" data-s="ASYNCHRONOUS MULTIPLAYER">
  <a class="label-link label-color-12" href="/tag/17770/">🕒 Asynchronous Multiplayer</a>
  <span class="label-count">526</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="uncategorized"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Uncategorized</h2>
  <div class="taglist" style="grid-template-rows:repeat(17, min-content)">
  <div class="label" data-s="PROFILE FEATURES LIMITED">
  <a class="label-link label-color-0" href="/tag/1003823/">🔒 Profile Features Limited</a>
  <span class="label-count">83767</span>
  </div>
  <div class="label" data-s="ADULT CONTENT">
  <a class="label-link label-color-1" href="/tag/65443/">🔞 Adult Content</a>
  <span class="label-count">6967</span>
  </div>
  <div class="label" data-s="HENTAI">
  <a class="label-link label-color-2" href="/tag/9130/">🥵 Hentai</a>
  <span class="label-count">3694</span>
  </div>
  <div class="label" data-s="CLASSIC">
  <a class="label-link label-color-3" href="/tag/1693/">🕒 Classic</a>
  <span class="label-count">1627</span>
  </div>
  <div class="label" data-s="FIGHTING">
  <a class="label-link label-color-4" href="/tag/1743/">🤼 Fighting</a>
  <span class="label-count">1581</span>
  </div>
  <div class="label" data-s="OPEN WORLD SURVIVAL CRAFT">
  <a class="label-link label-color-5" href="/tag/1100689/">🌎 Open World Survival Craft</a>
  <span class="label-count">815</span>
  </div>
  <div class="label" data-s="COZY">
  <a class="label-link label-color-6" href="/tag/97376/">🛏️ Cozy</a>
  <span class="label-count">693</span>
  </div>
  <div class="label" data-s="WHOLESOME">
  <a class="label-link label-color-7" href="/tag/552282/">🤗 Wholesome</a>
  <span class="label-count">600</span>
  </div>
  <div class="label" data-s="NARRATIVE">
  <a class="label-link label-color-8" href="/tag/7702/">📚 Narrative</a>
  <span class="label-count">563</span>
  </div>
  <div class="label" data-s="ROGUELIKE DECKBUILDER">
  <a class="label-link label-color-9" href="/tag/1091588/">🎴 Roguelike Deckbuilder</a>
  <span class="label-count">528</span>
  </div>
  <div class="label" data-s="PARTY GAME">
  <a class="label-link label-color-10" href="/tag/7178/">🤝 Party Game</a>
  <span class="label-count">527</span>
  </div>
  <div class="label" data-s="IMMERSIVE">
  <a class="label-link label-color-11" href="/tag/3934/">🌎 Immersive</a>
  <span class="label-count">522</span>
  </div>
  <div class="label" data-s="ADDICTIVE">
  <a class="label-link label-color-12" href="/tag/4190/">🫦 Addictive</a>
  <span class="label-count">494</span>
  </div>
  <div class="label" data-s="ESCAPE ROOM">
  <a class="label-link label-color-0" href="/tag/769306/">🗝️ Escape Room</a>
  <span class="label-count">462</span>
  </div>
  <div class="label" data-s="PARTY">
  <a class="label-link label-color-1" href="/tag/7108/">🥳 Party</a>
  <span class="label-count">453</span>
  </div>
  <div class="label" data-s="CULT CLASSIC">
  <a class="label-link label-color-2" href="/tag/7782/">📼 Cult Classic</a>
  <span class="label-count">378</span>
  </div>
  <div class="label" data-s="NOSTALGIA">
  <a class="label-link label-color-3" href="/tag/14720/">🕯️ Nostalgia</a>
  <span class="label-count">284</span>
  </div>
  <div class="label" data-s="FARMING">
  <a class="label-link label-color-4" href="/tag/4520/">🌾 Farming</a>
  <span class="label-count">234</span>
  </div>
  <div class="label" data-s="ELECTRONIC MUSIC">
  <a class="label-link label-color-5" href="/tag/61357/">🎶 Electronic Music</a>
  <span class="label-count">203</span>
  </div>
  <div class="label" data-s="SPACESHIPS">
  <a class="label-link label-color-6" href="/tag/4291/">🛰 Spaceships</a>
  <span class="label-count">202</span>
  </div>
  <div class="label" data-s="PINBALL">
  <a class="label-link label-color-7" href="/tag/6621/">🧲 Pinball</a>
  <span class="label-count">192</span>
  </div>
  <div class="label" data-s="SOCIAL DEDUCTION">
  <a class="label-link label-color-8" href="/tag/745697/">🠊 Social Deduction</a>
  <span class="label-count">188</span>
  </div>
  <div class="label" data-s="DWARF">
  <a class="label-link label-color-9" href="/tag/7918/">🧔🏻 Dwarf</a>
  <span class="label-count">179</span>
  </div>
  <div class="label" data-s="AMBIENT">
  <a class="label-link label-color-10" href="/tag/29855/">🍃 Ambient</a>
  <span class="label-count">173</span>
  </div>
  <div class="label" data-s="EPIC">
  <a class="label-link label-color-11" href="/tag/3965/">💎 Epic</a>
  <span class="label-count">168</span>
  </div>
  <div class="label" data-s="INSTRUMENTAL MUSIC">
  <a class="label-link label-color-12" href="/tag/189941/">🎻 Instrumental Music</a>
  <span class="label-count">125</span>
  </div>
  <div class="label" data-s="VIKINGS">
  <a class="label-link label-color-0" href="/tag/11634/">🛶 Vikings</a>
  <span class="label-count">116</span>
  </div>
  <div class="label" data-s="TILE-MATCHING">
  <a class="label-link label-color-1" href="/tag/176733/">🀄️ Tile-Matching</a>
  <span class="label-count">95</span>
  </div>
  <div class="label" data-s="ROCK MUSIC">
  <a class="label-link label-color-2" href="/tag/337964/">🤘 Rock Music</a>
  <span class="label-count">93</span>
  </div>
  <div class="label" data-s="JOB SIMULATOR">
  <a class="label-link label-color-3" href="/tag/35079/">🔧 Job Simulator</a>
  <span class="label-count">92</span>
  </div>
  <div class="label" data-s="BOSS RUSH">
  <a class="label-link label-color-4" href="/tag/11095/">💥 Boss Rush</a>
  <span class="label-count">89</span>
  </div>
  <div class="label" data-s="JUMP SCARE">
  <a class="label-link label-color-5" href="/tag/42089/">🔪 Jump Scare</a>
  <span class="label-count">86</span>
  </div>
  <div class="label" data-s="MAHJONG">
  <a class="label-link label-color-6" href="/tag/33572/">🀄 Mahjong</a>
  <span class="label-count">80</span>
  </div>
  <div class="label" data-s="8-BIT MUSIC">
  <a class="label-link label-color-7" href="/tag/117648/">👾 8-bit Music</a>
  <span class="label-count">76</span>
  </div>
  <div class="label" data-s="WELL-WRITTEN">
  <a class="label-link label-color-8" href="/tag/8461/">✍️ Well-Written</a>
  <span class="label-count">58</span>
  </div>
  <div class="label" data-s="ELECTRONIC">
  <a class="label-link label-color-9" href="/tag/143739/">🔋 Electronic</a>
  <span class="label-count">51</span>
  </div>
  <div class="label" data-s="EXTRACTION SHOOTER">
  <a class="label-link label-color-10" href="/tag/1199779/">🔫 Extraction Shooter</a>
  <span class="label-count">46</span>
  </div>
  <div class="label" data-s="SHOP KEEPER">
  <a class="label-link label-color-11" href="/tag/91114/">🛍️ Shop Keeper</a>
  <span class="label-count">40</span>
  </div>
  <div class="label" data-s="ELF">
  <a class="label-link label-color-12" href="/tag/102530/">🧝 Elf</a>
  <span class="label-count">38</span>
  </div>
  <div class="label" data-s="MUSOU">
  <a class="label-link label-color-0" href="/tag/323922/">🔱 Musou</a>
  <span class="label-count">38</span>
  </div>
  <div class="label" data-s="BIRDS">
  <a class="label-link label-color-1" href="/tag/6214/">🐦 Birds</a>
  <span class="label-count">37</span>
  </div>
  <div class="label" data-s="FOX">
  <a class="label-link label-color-2" href="/tag/30927/">🦊 Fox</a>
  <span class="label-count">33</span>
  </div>
  <div class="label" data-s="CODING">
  <a class="label-link label-color-3" href="/tag/42329/">💻 Coding</a>
  <span class="label-count">30</span>
  </div>
  <div class="label" data-s="CRICKET">
  <a class="label-link label-color-4" href="/tag/158638/">🏏 Cricket</a>
  <span class="label-count">28</span>
  </div>
  <div class="label" data-s="RUGBY">
  <a class="label-link label-color-5" href="/tag/49213/">🏉 Rugby</a>
  <span class="label-count">25</span>
  </div>
  <div class="label" data-s="HOBBY SIM">
  <a class="label-link label-color-6" href="/tag/1220528/">🌱 Hobby Sim</a>
  <span class="label-count">23</span>
  </div>
  <div class="label" data-s="VOLLEYBALL">
  <a class="label-link label-color-7" href="/tag/847164/">🏐 Volleyball</a>
  <span class="label-count">21</span>
  </div>
  <div class="label" data-s="SNOOKER">
  <a class="label-link label-color-8" href="/tag/363767/">🎱 Snooker</a>
  <span class="label-count">17</span>
  </div>
  <div class="label" data-s="REBOOT">
  <a class="label-link label-color-9" href="/tag/5941/">⏪ Reboot</a>
  <span class="label-count">16</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="story"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Story</h2>
  <div class="taglist" style="grid-template-rows:repeat(6, min-content)">
  <div class="label" data-s="STORY RICH">
  <a class="label-link label-color-10" href="/tag/1742/">📚 Story Rich</a>
  <span class="label-count">19151</span>
  </div>
  <div class="label" data-s="VISUAL NOVEL">
  <a class="label-link label-color-11" href="/tag/3799/">📚 Visual Novel</a>
  <span class="label-count">9365</span>
  </div>
  <div class="label" data-s="CHOICES MATTER">
  <a class="label-link label-color-12" href="/tag/6426/">🧞 Choices Matter</a>
  <span class="label-count">8585</span>
  </div>
  <div class="label" data-s="MULTIPLE ENDINGS">
  <a class="label-link label-color-0" href="/tag/6971/">🔚 Multiple Endings</a>
  <span class="label-count">7462</span>
  </div>
  <div class="label" data-s="CHOOSE YOUR OWN ADVENTURE">
  <a class="label-link label-color-1" href="/tag/4486/">🧚 Choose Your Own Adventure</a>
  <span class="label-count">4968</span>
  </div>
  <div class="label" data-s="ROMANCE">
  <a class="label-link label-color-2" href="/tag/4947/">💘 Romance</a>
  <span class="label-count">4830</span>
  </div>
  <div class="label" data-s="INTERACTIVE FICTION">
  <a class="label-link label-color-3" href="/tag/11014/">📚 Interactive Fiction</a>
  <span class="label-count">4672</span>
  </div>
  <div class="label" data-s="HISTORICAL">
  <a class="label-link label-color-4" href="/tag/3987/">📜 Historical</a>
  <span class="label-count">3597</span>
  </div>
  <div class="label" data-s="NARRATION">
  <a class="label-link label-color-5" href="/tag/5094/">📚 Narration</a>
  <span class="label-count">2993</span>
  </div>
  <div class="label" data-s="DETECTIVE">
  <a class="label-link label-color-6" href="/tag/5613/">🕵️ Detective</a>
  <span class="label-count">2635</span>
  </div>
  <div class="label" data-s="CONVERSATION">
  <a class="label-link label-color-7" href="/tag/15172/">🗣️ Conversation</a>
  <span class="label-count">2563</span>
  </div>
  <div class="label" data-s="LORE-RICH">
  <a class="label-link label-color-8" href="/tag/3854/">📖 Lore-Rich</a>
  <span class="label-count">2402</span>
  </div>
  <div class="label" data-s="ALTERNATE HISTORY">
  <a class="label-link label-color-9" href="/tag/4598/">🕰️ Alternate History</a>
  <span class="label-count">1718</span>
  </div>
  <div class="label" data-s="DYNAMIC NARRATION">
  <a class="label-link label-color-10" href="/tag/9592/">📚 Dynamic Narration</a>
  <span class="label-count">662</span>
  </div>
  <div class="label" data-s="OTOME">
  <a class="label-link label-color-11" href="/tag/31579/">💘 Otome</a>
  <span class="label-count">646</span>
  </div>
  <div class="label" data-s="BASED ON A NOVEL">
  <a class="label-link label-color-12" href="/tag/3796/">📔 Based On A Novel</a>
  <span class="label-count">116</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="actions_and_activities"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Actions &amp; Activities</h2>
  <div class="taglist" style="grid-template-rows:repeat(5, min-content)">
  <div class="label" data-s="EXPLORATION">
  <a class="label-link label-color-0" href="/tag/3834/">🗺 Exploration</a>
  <span class="label-count">18216</span>
  </div>
  <div class="label" data-s="SHOOTER">
  <a class="label-link label-color-1" href="/tag/1774/">🔫 Shooter</a>
  <span class="label-count">12542</span>
  </div>
  <div class="label" data-s="SURVIVAL">
  <a class="label-link label-color-2" href="/tag/1662/">🌲 Survival</a>
  <span class="label-count">8788</span>
  </div>
  <div class="label" data-s="SPORTS">
  <a class="label-link label-color-3" href="/tag/701/">🏅 Sports</a>
  <span class="label-count">7856</span>
  </div>
  <div class="label" data-s="BUILDING">
  <a class="label-link label-color-4" href="/tag/1643/">🏠 Building</a>
  <span class="label-count">5752</span>
  </div>
  <div class="label" data-s="STEALTH">
  <a class="label-link label-color-5" href="/tag/1687/">🥷 Stealth</a>
  <span class="label-count">3227</span>
  </div>
  <div class="label" data-s="INVESTIGATION">
  <a class="label-link label-color-6" href="/tag/8369/">🔍 Investigation</a>
  <span class="label-count">2880</span>
  </div>
  <div class="label" data-s="FLIGHT">
  <a class="label-link label-color-7" href="/tag/15045/">✈️ Flight</a>
  <span class="label-count">2173</span>
  </div>
  <div class="label" data-s="AGRICULTURE">
  <a class="label-link label-color-8" href="/tag/22602/">🌾 Agriculture</a>
  <span class="label-count">887</span>
  </div>
  <div class="label" data-s="TRADING">
  <a class="label-link label-color-9" href="/tag/4202/">💼 Trading</a>
  <span class="label-count">794</span>
  </div>
  <div class="label" data-s="MINING">
  <a class="label-link label-color-10" href="/tag/5981/">⛏️ Mining</a>
  <span class="label-count">692</span>
  </div>
  <div class="label" data-s="HACKING">
  <a class="label-link label-color-11" href="/tag/5502/">🔌 Hacking</a>
  <span class="label-count">571</span>
  </div>
  <div class="label" data-s="PROGRAMMING">
  <a class="label-link label-color-12" href="/tag/5432/">💻 Programming</a>
  <span class="label-count">547</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="scary"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Scary</h2>
  <div class="taglist" style="grid-template-rows:repeat(6, min-content)">
  <div class="label" data-s="HORROR">
  <a class="label-link label-color-0" href="/tag/1667/">😱 Horror</a>
  <span class="label-count">11568</span>
  </div>
  <div class="label" data-s="DARK">
  <a class="label-link label-color-1" href="/tag/4342/">😨 Dark</a>
  <span class="label-count">7602</span>
  </div>
  <div class="label" data-s="PSYCHOLOGICAL HORROR">
  <a class="label-link label-color-2" href="/tag/1721/">🕴 Psychological Horror</a>
  <span class="label-count">6840</span>
  </div>
  <div class="label" data-s="DARK FANTASY">
  <a class="label-link label-color-3" href="/tag/4604/">🧝 Dark Fantasy</a>
  <span class="label-count">4616</span>
  </div>
  <div class="label" data-s="SURVIVAL HORROR">
  <a class="label-link label-color-4" href="/tag/3978/">🎒 Survival Horror</a>
  <span class="label-count">4375</span>
  </div>
  <div class="label" data-s="ZOMBIES">
  <a class="label-link label-color-5" href="/tag/1659/">🧟 Zombies</a>
  <span class="label-count">3641</span>
  </div>
  <div class="label" data-s="DARK HUMOR">
  <a class="label-link label-color-6" href="/tag/5923/">🗿 Dark Humor</a>
  <span class="label-count">2451</span>
  </div>
  <div class="label" data-s="DEMONS">
  <a class="label-link label-color-7" href="/tag/9541/">👿 Demons</a>
  <span class="label-count">2425</span>
  </div>
  <div class="label" data-s="THRILLER">
  <a class="label-link label-color-8" href="/tag/4064/">🔪 Thriller</a>
  <span class="label-count">2342</span>
  </div>
  <div class="label" data-s="CRIME">
  <a class="label-link label-color-9" href="/tag/6378/">🚨 Crime</a>
  <span class="label-count">1524</span>
  </div>
  <div class="label" data-s="DARK COMEDY">
  <a class="label-link label-color-10" href="/tag/19995/">🧛🏻 Dark Comedy</a>
  <span class="label-count">1228</span>
  </div>
  <div class="label" data-s="LOVECRAFTIAN">
  <a class="label-link label-color-11" href="/tag/7432/">🐙 Lovecraftian</a>
  <span class="label-count">1150</span>
  </div>
  <div class="label" data-s="GOTHIC">
  <a class="label-link label-color-12" href="/tag/3952/">🦇 Gothic</a>
  <span class="label-count">780</span>
  </div>
  <div class="label" data-s="VAMPIRE">
  <a class="label-link label-color-0" href="/tag/4018/">🧛 Vampire</a>
  <span class="label-count">642</span>
  </div>
  <div class="label" data-s="ASSASSIN">
  <a class="label-link label-color-1" href="/tag/4376/">🗡️ Assassin</a>
  <span class="label-count">502</span>
  </div>
  <div class="label" data-s="WEREWOLVES">
  <a class="label-link label-color-2" href="/tag/17015/">🐺 Werewolves</a>
  <span class="label-count">266</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="level_design"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Level Design</h2>
  <div class="taglist" style="grid-template-rows:repeat(2, min-content)">
  <div class="label" data-s="EXPLORATION">
  <a class="label-link label-color-3" href="/tag/3834/">🗺 Exploration</a>
  <span class="label-count">18216</span>
  </div>
  <div class="label" data-s="OPEN WORLD">
  <a class="label-link label-color-4" href="/tag/1695/">🌍 Open World</a>
  <span class="label-count">9114</span>
  </div>
  <div class="label" data-s="LINEAR">
  <a class="label-link label-color-5" href="/tag/7250/">📏 Linear</a>
  <span class="label-count">7678</span>
  </div>
  <div class="label" data-s="SANDBOX">
  <a class="label-link label-color-6" href="/tag/3810/">🧱 Sandbox</a>
  <span class="label-count">6841</span>
  </div>
  <div class="label" data-s="SIDE SCROLLER">
  <a class="label-link label-color-7" href="/tag/3798/">📺 Side Scroller</a>
  <span class="label-count">5544</span>
  </div>
  <div class="label" data-s="NONLINEAR">
  <a class="label-link label-color-8" href="/tag/6869/">〰️ Nonlinear</a>
  <span class="label-count">2321</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="misc"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Miscellaneous</h2>
  <div class="taglist" style="grid-template-rows:repeat(8, min-content)">
  <div class="label" data-s="FREE TO PLAY">
  <a class="label-link label-color-9" href="/tag/113/">🆓 Free to Play</a>
  <span class="label-count">15385</span>
  </div>
  <div class="label" data-s="EARLY ACCESS">
  <a class="label-link label-color-10" href="/tag/493/">🐤 Early Access</a>
  <span class="label-count">14378</span>
  </div>
  <div class="label" data-s="DESIGN &amp; ILLUSTRATION">
  <a class="label-link label-color-11" href="/tag/84/">🎨 Design &amp; Illustration</a>
  <span class="label-count">3961</span>
  </div>
  <div class="label" data-s="UTILITIES">
  <a class="label-link label-color-12" href="/tag/87/">🔧 Utilities</a>
  <span class="label-count">2920</span>
  </div>
  <div class="label" data-s="WEB PUBLISHING">
  <a class="label-link label-color-0" href="/tag/1038/">🌐 Web Publishing</a>
  <span class="label-count">2511</span>
  </div>
  <div class="label" data-s="MOVIE">
  <a class="label-link label-color-1" href="/tag/4700/">🍿 Movie</a>
  <span class="label-count">1588</span>
  </div>
  <div class="label" data-s="EXPERIMENTAL">
  <a class="label-link label-color-2" href="/tag/13782/">⚗️ Experimental</a>
  <span class="label-count">1556</span>
  </div>
  <div class="label" data-s="ANIMATION &amp; MODELING">
  <a class="label-link label-color-3" href="/tag/872/">📏 Animation &amp; Modeling</a>
  <span class="label-count">1306</span>
  </div>
  <div class="label" data-s="AUDIO PRODUCTION">
  <a class="label-link label-color-4" href="/tag/1027/">🎶 Audio Production</a>
  <span class="label-count">881</span>
  </div>
  <div class="label" data-s="VIDEO PRODUCTION">
  <a class="label-link label-color-5" href="/tag/784/">📽 Video Production</a>
  <span class="label-count">849</span>
  </div>
  <div class="label" data-s="SOFTWARE TRAINING">
  <a class="label-link label-color-6" href="/tag/1445/">📚 Software Training</a>
  <span class="label-count">694</span>
  </div>
  <div class="label" data-s="EPISODIC">
  <a class="label-link label-color-7" href="/tag/4242/">🔢 Episodic</a>
  <span class="label-count">579</span>
  </div>
  <div class="label" data-s="REMAKE">
  <a class="label-link label-color-8" href="/tag/5708/">🔄 Remake</a>
  <span class="label-count">490</span>
  </div>
  <div class="label" data-s="PHOTO EDITING">
  <a class="label-link label-color-9" href="/tag/809/">📷 Photo Editing</a>
  <span class="label-count">463</span>
  </div>
  <div class="label" data-s="MINIGAMES">
  <a class="label-link label-color-10" href="/tag/8093/">🐜 Minigames</a>
  <span class="label-count">458</span>
  </div>
  <div class="label" data-s="SEQUEL">
  <a class="label-link label-color-11" href="/tag/5230/">2️⃣ Sequel</a>
  <span class="label-count">275</span>
  </div>
  <div class="label" data-s="EXPERIENCE">
  <a class="label-link label-color-12" href="/tag/9994/">👴 Experience</a>
  <span class="label-count">257</span>
  </div>
  <div class="label" data-s="KICKSTARTER">
  <a class="label-link label-color-0" href="/tag/5153/">💰 Kickstarter</a>
  <span class="label-count">243</span>
  </div>
  <div class="label" data-s="DOCUMENTARY">
  <a class="label-link label-color-1" href="/tag/15339/">📺 Documentary</a>
  <span class="label-count">207</span>
  </div>
  <div class="label" data-s="GAMING">
  <a class="label-link label-color-2" href="/tag/150626/">🎮 Gaming</a>
  <span class="label-count">176</span>
  </div>
  <div class="label" data-s="CROWDFUNDED">
  <a class="label-link label-color-3" href="/tag/7113/">🤑 Crowdfunded</a>
  <span class="label-count">137</span>
  </div>
  <div class="label" data-s="BENCHMARK">
  <a class="label-link label-color-4" href="/tag/5407/">📈 Benchmark</a>
  <span class="label-count">36</span>
  </div>
  <div class="label" data-s="FEATURE FILM">
  <a class="label-link label-color-5" href="/tag/233824/">🍿 Feature Film</a>
  <span class="label-count">36</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="scifi"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Science Fiction</h2>
  <div class="taglist" style="grid-template-rows:repeat(5, min-content)">
  <div class="label" data-s="SCI-FI">
  <a class="label-link label-color-6" href="/tag/3942/">🚀 Sci-fi</a>
  <span class="label-count">12212</span>
  </div>
  <div class="label" data-s="SPACE">
  <a class="label-link label-color-7" href="/tag/1755/">🌠 Space</a>
  <span class="label-count">6032</span>
  </div>
  <div class="label" data-s="FUTURISTIC">
  <a class="label-link label-color-8" href="/tag/4295/">🌆 Futuristic</a>
  <span class="label-count">5235</span>
  </div>
  <div class="label" data-s="POST-APOCALYPTIC">
  <a class="label-link label-color-9" href="/tag/3835/">☢️ Post-apocalyptic</a>
  <span class="label-count">3719</span>
  </div>
  <div class="label" data-s="ALIENS">
  <a class="label-link label-color-10" href="/tag/1673/">👽 Aliens</a>
  <span class="label-count">2595</span>
  </div>
  <div class="label" data-s="DYSTOPIAN ">
  <a class="label-link label-color-11" href="/tag/5030/">⛓ Dystopian </a>
  <span class="label-count">1910</span>
  </div>
  <div class="label" data-s="ALTERNATE HISTORY">
  <a class="label-link label-color-12" href="/tag/4598/">🕰️ Alternate History</a>
  <span class="label-count">1718</span>
  </div>
  <div class="label" data-s="MECHS">
  <a class="label-link label-color-0" href="/tag/4821/">🤖 Mechs</a>
  <span class="label-count">839</span>
  </div>
  <div class="label" data-s="STEAMPUNK">
  <a class="label-link label-color-1" href="/tag/1777/">🧷 Steampunk</a>
  <span class="label-count">790</span>
  </div>
  <div class="label" data-s="TIME TRAVEL">
  <a class="label-link label-color-2" href="/tag/10679/">⏳ Time Travel</a>
  <span class="label-count">693</span>
  </div>
  <div class="label" data-s="SUPERHERO">
  <a class="label-link label-color-3" href="/tag/1671/">🦸 Superhero</a>
  <span class="label-count">518</span>
  </div>
  <div class="label" data-s="MARS">
  <a class="label-link label-color-4" href="/tag/6702/">🔴 Mars</a>
  <span class="label-count">287</span>
  </div>
  <div class="label" data-s="TRANSHUMANISM">
  <a class="label-link label-color-5" href="/tag/4137/">🧬 Transhumanism</a>
  <span class="label-count">280</span>
  </div>
  <div class="label" data-s="WARHAMMER 40K">
  <a class="label-link label-color-6" href="/tag/12286/">🔨 Warhammer 40K</a>
  <span class="label-count">134</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="sex"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Adult Content</h2>
  <div class="taglist" style="grid-template-rows:repeat(2, min-content)">
  <div class="label" data-s="SEXUAL CONTENT">
  <a class="label-link label-color-7" href="/tag/12095/">🔞 Sexual Content</a>
  <span class="label-count">11158</span>
  </div>
  <div class="label" data-s="NUDITY">
  <a class="label-link label-color-8" href="/tag/6650/">🍑 Nudity</a>
  <span class="label-count">10891</span>
  </div>
  <div class="label" data-s="MATURE">
  <a class="label-link label-color-9" href="/tag/5611/">🙈 Mature</a>
  <span class="label-count">4489</span>
  </div>
  <div class="label" data-s="NSFW">
  <a class="label-link label-color-10" href="/tag/24904/">🫣 NSFW</a>
  <span class="label-count">3449</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="challenge"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Challenge</h2>
  <div class="taglist" style="grid-template-rows:repeat(3, min-content)">
  <div class="label" data-s="PVP">
  <a class="label-link label-color-11" href="/tag/1775/">🥊 PvP</a>
  <span class="label-count">8331</span>
  </div>
  <div class="label" data-s="DIFFICULT">
  <a class="label-link label-color-12" href="/tag/4026/">😓 Difficult</a>
  <span class="label-count">7316</span>
  </div>
  <div class="label" data-s="PVE">
  <a class="label-link label-color-0" href="/tag/6730/">🌲 PvE</a>
  <span class="label-count">7245</span>
  </div>
  <div class="label" data-s="PERMA DEATH">
  <a class="label-link label-color-1" href="/tag/1759/">☠️ Perma Death</a>
  <span class="label-count">2278</span>
  </div>
  <div class="label" data-s="TUTORIAL">
  <a class="label-link label-color-2" href="/tag/12057/">🎓 Tutorial</a>
  <span class="label-count">2149</span>
  </div>
  <div class="label" data-s="COMPETITIVE">
  <a class="label-link label-color-3" href="/tag/3878/">🥇 Competitive</a>
  <span class="label-count">1480</span>
  </div>
  <div class="label" data-s="UNFORGIVING">
  <a class="label-link label-color-4" href="/tag/1733/">😡 Unforgiving</a>
  <span class="label-count">211</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="time"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Time</h2>
  <div class="taglist" style="grid-template-rows:repeat(5, min-content)">
  <div class="label" data-s="TURN-BASED COMBAT">
  <a class="label-link label-color-5" href="/tag/4325/">🛡️ Turn-Based Combat</a>
  <span class="label-count">4603</span>
  </div>
  <div class="label" data-s="TURN-BASED TACTICS">
  <a class="label-link label-color-6" href="/tag/14139/">🎲 Turn-Based Tactics</a>
  <span class="label-count">4484</span>
  </div>
  <div class="label" data-s="TURN-BASED">
  <a class="label-link label-color-7" href="/tag/1677/">🎲 Turn-Based</a>
  <span class="label-count">4081</span>
  </div>
  <div class="label" data-s="REPLAY VALUE">
  <a class="label-link label-color-8" href="/tag/4711/">🔄 Replay Value</a>
  <span class="label-count">3361</span>
  </div>
  <div class="label" data-s="REAL TIME TACTICS">
  <a class="label-link label-color-9" href="/tag/3813/">▶️ Real Time Tactics</a>
  <span class="label-count">2494</span>
  </div>
  <div class="label" data-s="TIME MANAGEMENT">
  <a class="label-link label-color-10" href="/tag/16689/">🕒 Time Management</a>
  <span class="label-count">2391</span>
  </div>
  <div class="label" data-s="SHORT">
  <a class="label-link label-color-11" href="/tag/4234/">🤏 Short</a>
  <span class="label-count">2285</span>
  </div>
  <div class="label" data-s="FAST-PACED">
  <a class="label-link label-color-12" href="/tag/1734/">⚡ Fast-Paced</a>
  <span class="label-count">2264</span>
  </div>
  <div class="label" data-s="BULLET TIME">
  <a class="label-link label-color-0" href="/tag/5796/">⏸️ Bullet Time</a>
  <span class="label-count">897</span>
  </div>
  <div class="label" data-s="TIME MANIPULATION">
  <a class="label-link label-color-1" href="/tag/6625/">⏳ Time Manipulation</a>
  <span class="label-count">790</span>
  </div>
  <div class="label" data-s="REAL-TIME">
  <a class="label-link label-color-2" href="/tag/4161/">▶️ Real-Time</a>
  <span class="label-count">540</span>
  </div>
  <div class="label" data-s="REAL-TIME WITH PAUSE">
  <a class="label-link label-color-3" href="/tag/7107/">⏯ Real-Time with Pause</a>
  <span class="label-count">400</span>
  </div>
  <div class="label" data-s="TIME ATTACK">
  <a class="label-link label-color-4" href="/tag/5390/">⏰ Time Attack</a>
  <span class="label-count">388</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="humor"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Humor</h2>
  <div class="taglist" style="grid-template-rows:repeat(2, min-content)">
  <div class="label" data-s="FUNNY">
  <a class="label-link label-color-5" href="/tag/4136/">😃 Funny</a>
  <span class="label-count">12560</span>
  </div>
  <div class="label" data-s="COMEDY">
  <a class="label-link label-color-6" href="/tag/1719/">🤡 Comedy</a>
  <span class="label-count">8090</span>
  </div>
  <div class="label" data-s="DARK HUMOR">
  <a class="label-link label-color-7" href="/tag/5923/">🗿 Dark Humor</a>
  <span class="label-count">2451</span>
  </div>
  <div class="label" data-s="DARK COMEDY">
  <a class="label-link label-color-8" href="/tag/19995/">🧛🏻 Dark Comedy</a>
  <span class="label-count">1228</span>
  </div>
  <div class="label" data-s="PARODY ">
  <a class="label-link label-color-9" href="/tag/4878/">🥸 Parody </a>
  <span class="label-count">875</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="sport"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Sports</h2>
  <div class="taglist" style="grid-template-rows:repeat(10, min-content)">
  <div class="label" data-s="SPORTS">
  <a class="label-link label-color-10" href="/tag/701/">🏅 Sports</a>
  <span class="label-count">7856</span>
  </div>
  <div class="label" data-s="RACING">
  <a class="label-link label-color-11" href="/tag/699/">🏁 Racing</a>
  <span class="label-count">6580</span>
  </div>
  <div class="label" data-s="DRIVING">
  <a class="label-link label-color-12" href="/tag/1644/">🚗 Driving</a>
  <span class="label-count">2459</span>
  </div>
  <div class="label" data-s="PARKOUR">
  <a class="label-link label-color-0" href="/tag/4036/">🧗 Parkour</a>
  <span class="label-count">1604</span>
  </div>
  <div class="label" data-s="MARTIAL ARTS">
  <a class="label-link label-color-1" href="/tag/6915/">🥋 Martial Arts</a>
  <span class="label-count">831</span>
  </div>
  <div class="label" data-s="HUNTING">
  <a class="label-link label-color-2" href="/tag/9564/">🏹 Hunting</a>
  <span class="label-count">658</span>
  </div>
  <div class="label" data-s="FISHING">
  <a class="label-link label-color-3" href="/tag/15564/">🎣 Fishing</a>
  <span class="label-count">579</span>
  </div>
  <div class="label" data-s="ARCHERY">
  <a class="label-link label-color-4" href="/tag/13382/">🎯 Archery</a>
  <span class="label-count">422</span>
  </div>
  <div class="label" data-s="SAILING">
  <a class="label-link label-color-5" href="/tag/13577/">⛵ Sailing</a>
  <span class="label-count">374</span>
  </div>
  <div class="label" data-s="FOOTBALL (SOCCER)">
  <a class="label-link label-color-6" href="/tag/1254546/">⚽ Football (Soccer)</a>
  <span class="label-count">352</span>
  </div>
  <div class="label" data-s="BOXING">
  <a class="label-link label-color-7" href="/tag/12190/">🥊 Boxing</a>
  <span class="label-count">263</span>
  </div>
  <div class="label" data-s="MOTORBIKE">
  <a class="label-link label-color-8" href="/tag/198913/">🏍️ Motorbike</a>
  <span class="label-count">251</span>
  </div>
  <div class="label" data-s="GOLF">
  <a class="label-link label-color-9" href="/tag/7038/">🏌️ Golf</a>
  <span class="label-count">244</span>
  </div>
  <div class="label" data-s="BIKES">
  <a class="label-link label-color-10" href="/tag/123332/">🚲 Bikes</a>
  <span class="label-count">230</span>
  </div>
  <div class="label" data-s="BASKETBALL">
  <a class="label-link label-color-11" href="/tag/1746/">🏀 Basketball</a>
  <span class="label-count">191</span>
  </div>
  <div class="label" data-s="FOOTBALL (AMERICAN)">
  <a class="label-link label-color-12" href="/tag/1254552/">🏈 Football (American)</a>
  <span class="label-count">158</span>
  </div>
  <div class="label" data-s="MINI GOLF">
  <a class="label-link label-color-0" href="/tag/22955/">⛳ Mini Golf</a>
  <span class="label-count">157</span>
  </div>
  <div class="label" data-s="SKATEBOARDING">
  <a class="label-link label-color-1" href="/tag/1753/">🛹 Skateboarding</a>
  <span class="label-count">132</span>
  </div>
  <div class="label" data-s="WRESTLING">
  <a class="label-link label-color-2" href="/tag/47827/">🤼 Wrestling</a>
  <span class="label-count">130</span>
  </div>
  <div class="label" data-s="POOL">
  <a class="label-link label-color-3" href="/tag/17927/">🏊 Pool</a>
  <span class="label-count">113</span>
  </div>
  <div class="label" data-s="TENNIS">
  <a class="label-link label-color-4" href="/tag/5914/">🎾 Tennis</a>
  <span class="label-count">111</span>
  </div>
  <div class="label" data-s="BASEBALL">
  <a class="label-link label-color-5" href="/tag/5727/">⚾ Baseball</a>
  <span class="label-count">107</span>
  </div>
  <div class="label" data-s="CYCLING">
  <a class="label-link label-color-6" href="/tag/19568/">🚴 Cycling</a>
  <span class="label-count">107</span>
  </div>
  <div class="label" data-s="MOTOCROSS">
  <a class="label-link label-color-7" href="/tag/15868/">🚵🏿 Motocross</a>
  <span class="label-count">95</span>
  </div>
  <div class="label" data-s="SKATING">
  <a class="label-link label-color-8" href="/tag/96359/">🛹 Skating</a>
  <span class="label-count">95</span>
  </div>
  <div class="label" data-s="HOCKEY">
  <a class="label-link label-color-9" href="/tag/324176/">🏒 Hockey</a>
  <span class="label-count">76</span>
  </div>
  <div class="label" data-s="BOWLING">
  <a class="label-link label-color-10" href="/tag/7328/">🎳 Bowling</a>
  <span class="label-count">71</span>
  </div>
  <div class="label" data-s="SNOWBOARDING">
  <a class="label-link label-color-11" href="/tag/28444/">🏂 Snowboarding</a>
  <span class="label-count">67</span>
  </div>
  <div class="label" data-s="SKIING">
  <a class="label-link label-color-12" href="/tag/7309/">⛷ Skiing</a>
  <span class="label-count">63</span>
  </div>
  <div class="label" data-s="BMX">
  <a class="label-link label-color-0" href="/tag/252854/">🚲 BMX</a>
  <span class="label-count">55</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="rpg"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Role-Playing Genres</h2>
  <div class="taglist" style="grid-template-rows:repeat(3, min-content)">
  <div class="label" data-s="ACTION RPG">
  <a class="label-link label-color-1" href="/tag/4231/">💥 Action RPG</a>
  <span class="label-count">6359</span>
  </div>
  <div class="label" data-s="PARTY-BASED RPG">
  <a class="label-link label-color-2" href="/tag/10695/">🤝 Party-Based RPG</a>
  <span class="label-count">4330</span>
  </div>
  <div class="label" data-s="JRPG">
  <a class="label-link label-color-3" href="/tag/4434/">🌸 JRPG</a>
  <span class="label-count">4158</span>
  </div>
  <div class="label" data-s="STRATEGY RPG">
  <a class="label-link label-color-4" href="/tag/17305/">🧠 Strategy RPG</a>
  <span class="label-count">2622</span>
  </div>
  <div class="label" data-s="TACTICAL RPG">
  <a class="label-link label-color-5" href="/tag/21725/">🛡️ Tactical RPG</a>
  <span class="label-count">2163</span>
  </div>
  <div class="label" data-s="CRPG">
  <a class="label-link label-color-6" href="/tag/4474/">💻 CRPG</a>
  <span class="label-count">1579</span>
  </div>
  <div class="label" data-s="MMORPG">
  <a class="label-link label-color-7" href="/tag/1754/">🏪 MMORPG</a>
  <span class="label-count">1136</span>
  </div>
  <div class="label" data-s="MYSTERY DUNGEON">
  <a class="label-link label-color-8" href="/tag/198631/">🏰 Mystery Dungeon</a>
  <span class="label-count">1011</span>
  </div>
  <div class="label" data-s="TRADITIONAL ROGUELIKE">
  <a class="label-link label-color-9" href="/tag/454187/">👻 Traditional Roguelike</a>
  <span class="label-count">399</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="software_genre"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Software Genres</h2>
  <div class="taglist" style="grid-template-rows:repeat(3, min-content)">
  <div class="label" data-s="EDUCATION">
  <a class="label-link label-color-10" href="/tag/1036/">🏫 Education</a>
  <span class="label-count">4278</span>
  </div>
  <div class="label" data-s="DESIGN &amp; ILLUSTRATION">
  <a class="label-link label-color-11" href="/tag/84/">🎨 Design &amp; Illustration</a>
  <span class="label-count">3961</span>
  </div>
  <div class="label" data-s="UTILITIES">
  <a class="label-link label-color-12" href="/tag/87/">🔧 Utilities</a>
  <span class="label-count">2920</span>
  </div>
  <div class="label" data-s="SOFTWARE">
  <a class="label-link label-color-0" href="/tag/8013/">💾 Software</a>
  <span class="label-count">2780</span>
  </div>
  <div class="label" data-s="WEB PUBLISHING">
  <a class="label-link label-color-1" href="/tag/1038/">🌐 Web Publishing</a>
  <span class="label-count">2511</span>
  </div>
  <div class="label" data-s="ANIMATION &amp; MODELING">
  <a class="label-link label-color-2" href="/tag/872/">📏 Animation &amp; Modeling</a>
  <span class="label-count">1306</span>
  </div>
  <div class="label" data-s="AUDIO PRODUCTION">
  <a class="label-link label-color-3" href="/tag/1027/">🎶 Audio Production</a>
  <span class="label-count">881</span>
  </div>
  <div class="label" data-s="VIDEO PRODUCTION">
  <a class="label-link label-color-4" href="/tag/784/">📽 Video Production</a>
  <span class="label-count">849</span>
  </div>
  <div class="label" data-s="PHOTO EDITING">
  <a class="label-link label-color-5" href="/tag/809/">📷 Photo Editing</a>
  <span class="label-count">463</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="character"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Character</h2>
  <div class="taglist" style="grid-template-rows:repeat(2, min-content)">
  <div class="label" data-s="FEMALE PROTAGONIST">
  <a class="label-link label-color-6" href="/tag/7208/">👩 Female Protagonist</a>
  <span class="label-count">10620</span>
  </div>
  <div class="label" data-s="CHARACTER CUSTOMIZATION">
  <a class="label-link label-color-7" href="/tag/4747/">🦹 Character Customization</a>
  <span class="label-count">6920</span>
  </div>
  <div class="label" data-s="CHARACTER ACTION GAME">
  <a class="label-link label-color-8" href="/tag/3955/">⚡ Character Action Game</a>
  <span class="label-count">873</span>
  </div>
  <div class="label" data-s="VILLAIN PROTAGONIST">
  <a class="label-link label-color-9" href="/tag/11333/">😈 Villain Protagonist</a>
  <span class="label-count">289</span>
  </div>
  <div class="label" data-s="SILENT PROTAGONIST">
  <a class="label-link label-color-10" href="/tag/15954/">🔇 Silent Protagonist</a>
  <span class="label-count">154</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="violence"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Violence</h2>
  <div class="taglist" style="grid-template-rows:repeat(1, min-content)">
  <div class="label" data-s="VIOLENT">
  <a class="label-link label-color-11" href="/tag/4667/">👊 Violent</a>
  <span class="label-count">9834</span>
  </div>
  <div class="label" data-s="GORE">
  <a class="label-link label-color-12" href="/tag/4345/">😖 Gore</a>
  <span class="label-count">7868</span>
  </div>
  <div class="label" data-s="BLOOD">
  <a class="label-link label-color-0" href="/tag/5228/">🩸 Blood</a>
  <span class="label-count">701</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="audio"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Audio</h2>
  <div class="taglist" style="grid-template-rows:repeat(2, min-content)">
  <div class="label" data-s="SOUNDTRACK">
  <a class="label-link label-color-1" href="/tag/7948/">🎶 Soundtrack</a>
  <span class="label-count">9222</span>
  </div>
  <div class="label" data-s="GREAT SOUNDTRACK">
  <a class="label-link label-color-2" href="/tag/1756/">🎶 Great Soundtrack</a>
  <span class="label-count">5468</span>
  </div>
  <div class="label" data-s="MUSIC">
  <a class="label-link label-color-3" href="/tag/1621/">🎶 Music</a>
  <span class="label-count">2014</span>
  </div>
  <div class="label" data-s="MUSIC-BASED PROCEDURAL GENERATION">
  <a class="label-link label-color-4" href="/tag/8253/">🤖 Music-Based Procedural Generation</a>
  <span class="label-count">353</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="card_and_board_games"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Card &amp; Board Genres</h2>
  <div class="taglist" style="grid-template-rows:repeat(3, min-content)">
  <div class="label" data-s="TABLETOP">
  <a class="label-link label-color-5" href="/tag/17389/">🃏 Tabletop</a>
  <span class="label-count">5104</span>
  </div>
  <div class="label" data-s="CARD GAME">
  <a class="label-link label-color-6" href="/tag/1666/">🃏 Card Game</a>
  <span class="label-count">3108</span>
  </div>
  <div class="label" data-s="BOARD GAME">
  <a class="label-link label-color-7" href="/tag/1770/">🎲 Board Game</a>
  <span class="label-count">2702</span>
  </div>
  <div class="label" data-s="DECKBUILDING">
  <a class="label-link label-color-8" href="/tag/32322/">🎴 Deckbuilding</a>
  <span class="label-count">1830</span>
  </div>
  <div class="label" data-s="CARD BATTLER">
  <a class="label-link label-color-9" href="/tag/791774/">🃏 Card Battler</a>
  <span class="label-count">1609</span>
  </div>
  <div class="label" data-s="WORD GAME">
  <a class="label-link label-color-10" href="/tag/24003/">📚 Word Game</a>
  <span class="label-count">1007</span>
  </div>
  <div class="label" data-s="TRADING CARD GAME">
  <a class="label-link label-color-11" href="/tag/9271/">🤝 Trading Card Game</a>
  <span class="label-count">652</span>
  </div>
  <div class="label" data-s="TRIVIA">
  <a class="label-link label-color-12" href="/tag/10437/">🤓 Trivia</a>
  <span class="label-count">412</span>
  </div>
  <div class="label" data-s="CHESS">
  <a class="label-link label-color-0" href="/tag/4184/">♟️ Chess</a>
  <span class="label-count">265</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="controls"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Controls</h2>
  <div class="taglist" style="grid-template-rows:repeat(3, min-content)">
  <div class="label" data-s="CONTROLLER">
  <a class="label-link label-color-1" href="/tag/7481/">🎮 Controller</a>
  <span class="label-count">9597</span>
  </div>
  <div class="label" data-s="GRID-BASED MOVEMENT">
  <a class="label-link label-color-2" href="/tag/7569/">♟️ Grid-Based Movement</a>
  <span class="label-count">1555</span>
  </div>
  <div class="label" data-s="TWIN STICK SHOOTER">
  <a class="label-link label-color-3" href="/tag/4758/">🕹️ Twin Stick Shooter</a>
  <span class="label-count">1528</span>
  </div>
  <div class="label" data-s="MOUSE ONLY">
  <a class="label-link label-color-4" href="/tag/11123/">🖱️ Mouse only</a>
  <span class="label-count">668</span>
  </div>
  <div class="label" data-s="TOUCH-FRIENDLY">
  <a class="label-link label-color-5" href="/tag/25085/">👆 Touch-Friendly</a>
  <span class="label-count">322</span>
  </div>
  <div class="label" data-s="INTENTIONALLY AWKWARD CONTROLS">
  <a class="label-link label-color-6" href="/tag/14906/">😬 Intentionally Awkward Controls</a>
  <span class="label-count">81</span>
  </div>
  <div class="label" data-s="VOICE CONTROL">
  <a class="label-link label-color-7" href="/tag/27758/">🎙️ Voice Control</a>
  <span class="label-count">48</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="customization"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Customization</h2>
  <div class="taglist" style="grid-template-rows:repeat(2, min-content)">
  <div class="label" data-s="CHARACTER CUSTOMIZATION">
  <a class="label-link label-color-8" href="/tag/4747/">🦹 Character Customization</a>
  <span class="label-count">6920</span>
  </div>
  <div class="label" data-s="LEVEL EDITOR">
  <a class="label-link label-color-9" href="/tag/8122/">📖 Level Editor</a>
  <span class="label-count">1690</span>
  </div>
  <div class="label" data-s="MODDABLE">
  <a class="label-link label-color-10" href="/tag/1669/">🛠️ Moddable</a>
  <span class="label-count">1418</span>
  </div>
  <div class="label" data-s="GUN CUSTOMIZATION">
  <a class="label-link label-color-11" href="/tag/5765/">🔫 Gun Customization</a>
  <span class="label-count">1011</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="military"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Military</h2>
  <div class="taglist" style="grid-template-rows:repeat(3, min-content)">
  <div class="label" data-s="WAR">
  <a class="label-link label-color-12" href="/tag/1678/">⚔️ War</a>
  <span class="label-count">3693</span>
  </div>
  <div class="label" data-s="MILITARY">
  <a class="label-link label-color-0" href="/tag/4168/">🪖 Military</a>
  <span class="label-count">2977</span>
  </div>
  <div class="label" data-s="WORLD WAR II">
  <a class="label-link label-color-1" href="/tag/4150/">🪂 World War II</a>
  <span class="label-count">1146</span>
  </div>
  <div class="label" data-s="TANKS">
  <a class="label-link label-color-2" href="/tag/13276/">🚜 Tanks</a>
  <span class="label-count">709</span>
  </div>
  <div class="label" data-s="NAVAL">
  <a class="label-link label-color-3" href="/tag/6910/">🚢 Naval</a>
  <span class="label-count">507</span>
  </div>
  <div class="label" data-s="COLD WAR">
  <a class="label-link label-color-4" href="/tag/5179/">☢️ Cold War</a>
  <span class="label-count">433</span>
  </div>
  <div class="label" data-s="NAVAL COMBAT">
  <a class="label-link label-color-5" href="/tag/4994/">🚢 Naval Combat</a>
  <span class="label-count">397</span>
  </div>
  <div class="label" data-s="WORLD WAR I">
  <a class="label-link label-color-6" href="/tag/5382/">🎖️ World War I</a>
  <span class="label-count">234</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="fighting"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Fighting</h2>
  <div class="taglist" style="grid-template-rows:repeat(2, min-content)">
  <div class="label" data-s="2D FIGHTER">
  <a class="label-link label-color-7" href="/tag/4736/">🤼 2D Fighter</a>
  <span class="label-count">1674</span>
  </div>
  <div class="label" data-s="3D FIGHTER">
  <a class="label-link label-color-8" href="/tag/6506/">🤼 3D Fighter</a>
  <span class="label-count">1234</span>
  </div>
  <div class="label" data-s="SPECTACLE FIGHTER">
  <a class="label-link label-color-9" href="/tag/4777/">🤸 Spectacle fighter</a>
  <span class="label-count">890</span>
  </div>
  <div class="label" data-s="BOXING">
  <a class="label-link label-color-10" href="/tag/12190/">🥊 Boxing</a>
  <span class="label-count">263</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="mods"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Mods</h2>
  <div class="taglist" style="grid-template-rows:repeat(1, min-content)">
  <div class="label" data-s="LEVEL EDITOR">
  <a class="label-link label-color-11" href="/tag/8122/">📖 Level Editor</a>
  <span class="label-count">1690</span>
  </div>
  <div class="label" data-s="MODDABLE">
  <a class="label-link label-color-12" href="/tag/1669/">🛠️ Moddable</a>
  <span class="label-count">1418</span>
  </div>
  <div class="label" data-s="MOD">
  <a class="label-link label-color-0" href="/tag/5348/">🔧 Mod</a>
  <span class="label-count">214</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="tool"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Tools</h2>
  <div class="taglist" style="grid-template-rows:repeat(1, min-content)">
  <div class="label" data-s="RPGMAKER">
  <a class="label-link label-color-1" href="/tag/5577/">🧰 RPGMaker</a>
  <span class="label-count">2086</span>
  </div>
  <div class="label" data-s="GAMEMAKER">
  <a class="label-link label-color-2" href="/tag/1649/">🧰 GameMaker</a>
  <span class="label-count">276</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="combat_sports"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Combat Sports</h2>
  <div class="taglist" style="grid-template-rows:repeat(2, min-content)">
  <div class="label" data-s="MARTIAL ARTS">
  <a class="label-link label-color-3" href="/tag/6915/">🥋 Martial Arts</a>
  <span class="label-count">831</span>
  </div>
  <div class="label" data-s="HUNTING">
  <a class="label-link label-color-4" href="/tag/9564/">🏹 Hunting</a>
  <span class="label-count">658</span>
  </div>
  <div class="label" data-s="ARCHERY">
  <a class="label-link label-color-5" href="/tag/13382/">🎯 Archery</a>
  <span class="label-count">422</span>
  </div>
  <div class="label" data-s="BOXING">
  <a class="label-link label-color-6" href="/tag/12190/">🥊 Boxing</a>
  <span class="label-count">263</span>
  </div>
  <div class="label" data-s="WRESTLING">
  <a class="label-link label-color-7" href="/tag/47827/">🤼 Wrestling</a>
  <span class="label-count">130</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="ball_sports"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Ball Sports</h2>
  <div class="taglist" style="grid-template-rows:repeat(3, min-content)">
  <div class="label" data-s="FOOTBALL (SOCCER)">
  <a class="label-link label-color-8" href="/tag/1254546/">⚽ Football (Soccer)</a>
  <span class="label-count">352</span>
  </div>
  <div class="label" data-s="GOLF">
  <a class="label-link label-color-9" href="/tag/7038/">🏌️ Golf</a>
  <span class="label-count">244</span>
  </div>
  <div class="label" data-s="BASKETBALL">
  <a class="label-link label-color-10" href="/tag/1746/">🏀 Basketball</a>
  <span class="label-count">191</span>
  </div>
  <div class="label" data-s="FOOTBALL (AMERICAN)">
  <a class="label-link label-color-11" href="/tag/1254552/">🏈 Football (American)</a>
  <span class="label-count">158</span>
  </div>
  <div class="label" data-s="MINI GOLF">
  <a class="label-link label-color-12" href="/tag/22955/">⛳ Mini Golf</a>
  <span class="label-count">157</span>
  </div>
  <div class="label" data-s="TENNIS">
  <a class="label-link label-color-0" href="/tag/5914/">🎾 Tennis</a>
  <span class="label-count">111</span>
  </div>
  <div class="label" data-s="BASEBALL">
  <a class="label-link label-color-1" href="/tag/5727/">⚾ Baseball</a>
  <span class="label-count">107</span>
  </div>
  <div class="label" data-s="BOWLING">
  <a class="label-link label-color-2" href="/tag/7328/">🎳 Bowling</a>
  <span class="label-count">71</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="team_sports"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Team Sports</h2>
  <div class="taglist" style="grid-template-rows:repeat(2, min-content)">
  <div class="label" data-s="FOOTBALL (SOCCER)">
  <a class="label-link label-color-3" href="/tag/1254546/">⚽ Football (Soccer)</a>
  <span class="label-count">352</span>
  </div>
  <div class="label" data-s="BASKETBALL">
  <a class="label-link label-color-4" href="/tag/1746/">🏀 Basketball</a>
  <span class="label-count">191</span>
  </div>
  <div class="label" data-s="FOOTBALL (AMERICAN)">
  <a class="label-link label-color-5" href="/tag/1254552/">🏈 Football (American)</a>
  <span class="label-count">158</span>
  </div>
  <div class="label" data-s="TENNIS">
  <a class="label-link label-color-6" href="/tag/5914/">🎾 Tennis</a>
  <span class="label-count">111</span>
  </div>
  <div class="label" data-s="BASEBALL">
  <a class="label-link label-color-7" href="/tag/5727/">⚾ Baseball</a>
  <span class="label-count">107</span>
  </div>
  <div class="label" data-s="HOCKEY">
  <a class="label-link label-color-8" href="/tag/324176/">🏒 Hockey</a>
  <span class="label-count">76</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="franchise"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Franchises</h2>
  <div class="taglist" style="grid-template-rows:repeat(2, min-content)">
  <div class="label" data-s="DUNGEONS &amp; DRAGONS">
  <a class="label-link label-color-9" href="/tag/14153/">🐲 Dungeons &amp; Dragons</a>
  <span class="label-count">471</span>
  </div>
  <div class="label" data-s="LEGO">
  <a class="label-link label-color-10" href="/tag/1736/">🧱 LEGO</a>
  <span class="label-count">209</span>
  </div>
  <div class="label" data-s="GAMES WORKSHOP">
  <a class="label-link label-color-11" href="/tag/5310/">⚒️ Games Workshop</a>
  <span class="label-count">150</span>
  </div>
  <div class="label" data-s="WARHAMMER 40K">
  <a class="label-link label-color-12" href="/tag/12286/">🔨 Warhammer 40K</a>
  <span class="label-count">134</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="hardware"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Hardware</h2>
  <div class="taglist" style="grid-template-rows:repeat(1, min-content)">
  <div class="label" data-s="TRACKIR">
  <a class="label-link label-color-0" href="/tag/8075/">👣 TrackIR</a>
  <span class="label-count">148</span>
  </div>
  <div class="label" data-s="HARDWARE">
  <a class="label-link label-color-1" href="/tag/603297/">💻 Hardware</a>
  <span class="label-count">41</span>
  </div>
  <div class="label" data-s="STEAM MACHINE">
  <a class="label-link label-color-2" href="/tag/348922/">🚂 Steam Machine</a>
  <span class="label-count">33</span>
  </div>
  </div>
  </div>
  <div class="taglist-wrap">
  <h2 class="b" style="color:var(--contrast-color)" id="winter_sports"><svg width="32" height="32" viewBox="0 0 16 16" class="octicon octicon-tag" aria-hidden="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg> Winter Sports</h2>
  <div class="taglist" style="grid-template-rows:repeat(1, min-content)">
  <div class="label" data-s="HOCKEY">
  <a class="label-link label-color-3" href="/tag/324176/">🏒 Hockey</a>
  <span class="label-count">76</span>
  </div>
  <div class="label" data-s="SNOWBOARDING">
  <a class="label-link label-color-4" href="/tag/28444/">🏂 Snowboarding</a>
  <span class="label-count">67</span>
  </div>
  <div class="label" data-s="SKIING">
  <a class="label-link label-color-5" href="/tag/7309/">⛷ Skiing</a>
  <span class="label-count">63</span>
  </div>
  </div>
  </div>
  `);
  const headers = parsed.getElementsByTagName("h2");
  const taglists = parsed
    .getElementsByTagName("div")
    .filter((div) => div.attributes.class === "taglist");
  console.log(taglists[0].childNodes[1].text);
  const categories = [];
  for (const header of headers) {
    tags[header.text.trim()] = [];
    categories.push(header.text.trim());
  }
  let i = 0;
  const lists = [];
  for (const list of taglists) {
    lists[i] = [];
    const links = list.getElementsByTagName("a")
    for(const link of links){
      lists[i].push(link.attributes.href.split("/").at(-2))
    }
    i++;
  }

  for(let i=0; i<categories.length; i++){
    tags[categories[i]] = lists[i]
  }

  console.log(tags)
  fs.writeFile("../src/util/tagCategories.ts", `export const tagCategories = ${JSON.stringify(tags)}`, (err)=>{
    if(err) console.error(err)
  })
}

main();
