<template>
  <div class="container">
    <!-- 側邊攔 -->
    <div class="sidebar container__sidebar">
      <header class="search-bar sidebar__search-bar">
        <router-link to="/" class="link">
          <svg
            width="93"
            height="39"
            viewBox="0 0 93 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="svg-logo search-bar__logo"
          >
            <path
              class="svg-t"
              d="M1.472 7.4C1.152 7.4 0.96 7.592 0.96 7.912V11.112C0.96 11.432 1.152 11.624 1.472 11.624H5.184V32.488C5.184 32.84 5.376 33 5.696 33H9.024C9.376 33 9.536 32.84 9.536 32.488V11.624H13.248C13.6 11.624 13.76 11.432 13.76 11.112V7.912C13.76 7.592 13.6 7.4 13.248 7.4H1.472Z"
              fill="#1CC8EE"
            />
            <path
              d="M24.1148 33C24.3308 33 24.4208 32.892 24.3668 32.694L21.3788 20.652C21.3428 20.472 21.2348 20.4 21.0728 20.4H18.5708C18.4088 20.4 18.3008 20.472 18.2648 20.652L15.2768 32.694C15.2228 32.892 15.3127 33 15.5108 33H17.2748C17.4368 33 17.5268 32.91 17.5628 32.748L18.1208 30.48H21.5048L22.0808 32.748C22.1168 32.91 22.2068 33 22.3688 33H24.1148ZM20.9468 28.392H18.6788L19.8128 23.496L20.9468 28.392ZM26.1196 33C25.9216 33 25.8316 32.892 25.8316 32.712V20.688C25.8316 20.508 25.9216 20.4 26.1196 20.4H27.9916C28.1716 20.4 28.2796 20.508 28.2796 20.688V32.712C28.2796 32.892 28.1716 33 27.9916 33H26.1196ZM40.2735 20.4C40.0395 20.4 39.9315 20.508 39.8955 20.742L38.9775 28.266H38.8875L37.1235 20.706C37.0695 20.508 36.9435 20.4 36.7275 20.4H35.6295C35.4135 20.4 35.2875 20.508 35.2335 20.706L33.4695 28.266H33.3795L32.4975 20.742C32.4615 20.508 32.3355 20.4 32.1195 20.4H30.4275C30.1755 20.4 30.0495 20.544 30.0855 20.778L31.7415 32.658C31.7775 32.892 31.9035 33 32.1375 33H34.1175C34.3335 33 34.4595 32.892 34.5135 32.676L36.1875 25.296L37.8435 32.676C37.8975 32.892 38.0235 33 38.2395 33H40.1835C40.4175 33 40.5435 32.892 40.5795 32.676L42.3075 20.778C42.3435 20.544 42.2175 20.4 41.9655 20.4H40.2735ZM51.3081 33C51.5241 33 51.6141 32.892 51.5601 32.694L48.5721 20.652C48.5361 20.472 48.4281 20.4 48.2661 20.4H45.7641C45.6021 20.4 45.4941 20.472 45.4581 20.652L42.4701 32.694C42.4161 32.892 42.5061 33 42.7041 33H44.4681C44.6301 33 44.7201 32.91 44.7561 32.748L45.3141 30.48H48.6981L49.2741 32.748C49.3101 32.91 49.4001 33 49.5621 33H51.3081ZM48.1401 28.392H45.8721L47.0061 23.496L48.1401 28.392ZM58.731 20.4C58.533 20.4 58.443 20.508 58.443 20.688V27.51L55.059 20.634C54.987 20.472 54.897 20.4 54.735 20.4H53.313C53.133 20.4 53.025 20.508 53.025 20.688V32.712C53.025 32.892 53.133 33 53.313 33H55.005C55.203 33 55.293 32.892 55.293 32.712V25.89L58.677 32.766C58.749 32.928 58.839 33 59.001 33H60.423C60.603 33 60.711 32.892 60.711 32.712V20.688C60.711 20.508 60.603 20.4 60.423 20.4H58.731ZM74.2352 21.192C74.2352 19.5 73.3172 18.6 71.6252 18.6H67.3052C67.1252 18.6 67.0172 18.69 67.0172 18.888V32.712C67.0172 32.892 67.1252 33 67.3052 33H71.6252C73.3172 33 74.2352 32.1 74.2352 30.408V27.096C74.2352 26.43 73.7492 25.926 73.1012 25.818V25.782C73.7492 25.674 74.2352 25.17 74.2352 24.504V21.192ZM71.8412 23.91C71.8412 24.36 71.5892 24.612 71.1212 24.612H69.4832V20.976H71.1212C71.6072 20.976 71.8412 21.228 71.8412 21.696V23.91ZM71.8412 29.904C71.8412 30.39 71.5892 30.624 71.1212 30.624H69.4832V26.988H71.1212C71.6072 26.988 71.8412 27.24 71.8412 27.708V29.904ZM81.2188 20.4C81.0208 20.4 80.8588 20.562 80.8588 20.76V29.904C80.8588 30.39 80.6068 30.624 80.1388 30.624H79.2028C78.7348 30.624 78.4828 30.39 78.4828 29.904V20.76C78.4828 20.562 78.3208 20.4 78.1228 20.4H76.3948C76.1968 20.4 76.0348 20.562 76.0348 20.76V30.408C76.0348 32.1 76.9348 33 78.6268 33H80.6428C82.3348 33 83.2348 32.1 83.2348 30.408V20.76C83.2348 20.562 83.0728 20.4 82.8748 20.4H81.2188ZM87.451 20.4C85.777 20.4 84.859 21.3 84.859 22.992V26.106C84.859 26.448 85.021 26.664 85.345 26.772L89.665 28.176V29.994C89.665 30.48 89.413 30.714 88.945 30.714H87.973C87.523 30.714 87.253 30.48 87.253 29.994V29.238C87.253 29.04 87.163 28.95 86.965 28.95H85.147C84.967 28.95 84.859 29.04 84.859 29.238V30.408C84.859 32.1 85.777 33 87.451 33H89.467C91.159 33 92.059 32.1 92.059 30.408V27.024C92.059 26.682 91.897 26.466 91.591 26.358L87.235 24.954V23.424C87.235 22.956 87.505 22.704 87.955 22.704H88.945C89.431 22.704 89.665 22.956 89.665 23.424V24.18C89.665 24.36 89.773 24.468 89.953 24.468H91.771C91.969 24.468 92.059 24.36 92.059 24.18V22.992C92.059 21.3 91.159 20.4 89.467 20.4H87.451Z"
              fill="#F5F5F5"
            />
            <path
              d="M17 13.2632C17 14.0968 17.3656 14.8453 17.9375 15.3663V17.0526C17.9375 17.5737 18.3594 18 18.875 18H19.8125C20.3281 18 20.75 17.5737 20.75 17.0526V16.1053H28.25V17.0526C28.25 17.5737 28.6719 18 29.1875 18H30.125C30.6406 18 31.0625 17.5737 31.0625 17.0526V15.3663C31.6344 14.8453 32 14.0968 32 13.2632V3.78947C32 0.473684 28.6438 0 24.5 0C20.3562 0 17 0.473684 17 3.78947V13.2632ZM20.2812 14.2105C19.5031 14.2105 18.875 13.5758 18.875 12.7895C18.875 12.0032 19.5031 11.3684 20.2812 11.3684C21.0594 11.3684 21.6875 12.0032 21.6875 12.7895C21.6875 13.5758 21.0594 14.2105 20.2812 14.2105ZM28.7188 14.2105C27.9406 14.2105 27.3125 13.5758 27.3125 12.7895C27.3125 12.0032 27.9406 11.3684 28.7188 11.3684C29.4969 11.3684 30.125 12.0032 30.125 12.7895C30.125 13.5758 29.4969 14.2105 28.7188 14.2105ZM30.125 8.52632H18.875V3.78947H30.125V8.52632Z"
              fill="#F5F5F5"
            />
            <line
              x1="34.5"
              y1="16.5"
              x2="90.5"
              y2="16.5"
              stroke="#F5F5F5"
              stroke-linecap="round"
              stroke-dasharray="2 4"
            />
            <path
              d="M64.416 8.748H61.512V6.012H64.416V8.748ZM60.66 5.208V9.54H65.292V5.208H60.66ZM58.932 11.424V3.348H67.032V11.424H58.932ZM58.032 2.46V12.912H58.932V12.264H67.032V12.912H67.98V2.46H58.032ZM78.048 7.524H71.928V6.336H78.048V7.524ZM71.928 11.448V10.176H78.048V11.448H71.928ZM78.048 9.468H71.928V8.244H78.048V9.468ZM80.34 4.44V3.612H77.316C77.676 3.204 78.06 2.7 78.384 2.196L77.412 1.944C77.148 2.436 76.704 3.12 76.32 3.612H73.152L73.668 3.336C73.452 2.928 72.972 2.34 72.54 1.92L71.76 2.256C72.132 2.664 72.54 3.204 72.78 3.612H69.684V4.44H74.484C74.412 4.788 74.304 5.196 74.196 5.544H71.052V12.924H71.928V12.24H78.048V12.924H78.96V5.544H75.144C75.288 5.208 75.408 4.824 75.54 4.44H80.34ZM90.096 6.288H84.072V5.196H90.096V6.288ZM90.096 8.064H84.072V6.96H90.096V8.064ZM90.096 9.852H84.072V8.748H90.096V9.852ZM83.16 4.488V10.572H91.044V4.488H87.144C87.264 4.152 87.384 3.768 87.492 3.396H91.956V2.58H82.008V3.396H86.472C86.412 3.756 86.316 4.152 86.22 4.488H83.16ZM85.332 10.704C84.504 11.256 82.872 11.88 81.588 12.216C81.792 12.408 82.056 12.72 82.2 12.912C83.484 12.552 85.092 11.916 86.136 11.292L85.332 10.704ZM87.876 11.352C89.28 11.832 90.696 12.456 91.548 12.924L92.376 12.312C91.44 11.844 89.916 11.232 88.512 10.764L87.876 11.352Z"
              fill="#1CC8EE"
            />
          </svg>
        </router-link>
        <form class="search-bar__input">
          <input
            class="input"
            type="text"
            placeholder="選擇路線或手動輸入關鍵字"
            v-model="userInput"
          />
        </form>
      </header>
      <!-- 輸入面板 -->
      <div class="sidebar__pannel">
        <!-- 主要功能 -->
        <div v-if="mainBoard" class="main-buttons">
          <button @click="openCityBoard" class="button">
            <i class="icon-position fas fa-map-marker-alt"></i>選擇縣市
          </button>
          <button class="button text-color-blue">手動輸入</button>
          <button @click="closeMainBoard" class="button">
            <i class="icon-arrow fas fa-chevron-up"></i>
          </button>

          <button @click="inputValue('紅')" class="button text-color-blue">紅</button>
          <button @click="inputValue('藍')" class="button text-color-blue">藍</button>

          <button @click="inputValue('1')" class="button">1</button>
          <button @click="inputValue('2')" class="button">2</button>
          <button @click="inputValue('3')" class="button">3</button>

          <button @click="inputValue('綠')" class="button text-color-blue">綠</button>
          <button @click="inputValue('棕')" class="button text-color-blue">棕</button>

          <button @click="inputValue('4')" class="button">4</button>
          <button @click="inputValue('5')" class="button">5</button>
          <button @click="inputValue('6')" class="button">6</button>

          <button @click="inputValue('橘')" class="button text-color-blue">橘</button>
          <button @click="inputValue('小')" class="button text-color-blue">小</button>

          <button @click="inputValue('7')" class="button">7</button>
          <button @click="inputValue('8')" class="button">8</button>
          <button @click="inputValue('9')" class="button">9</button>

          <button @click="inputValue('幹線')" class="button text-color-blue">幹線</button>

          <button @click="openMoreBoard" class="button text-color-blue">更多</button>

          <button @click="clearInput" class="button text-color-blue">C</button>

          <button @click="inputValue('0')" class="button">0</button>

          <button @click="removeLastChar" class="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="svg-x"
                d="M16.1393 3.50558L5.28672 9.7712C3.57109 10.7618 3.57109 13.2382 5.28672 14.2288L16.1393 20.4944C17.8549 21.485 20 20.2474 20 18.2662V5.73382C20 3.75265 17.8549 2.515 16.1393 3.50558ZM16.4083 13.4126C16.5988 13.5834 16.7177 13.7728 16.7523 13.9587C16.7881 14.163 16.7165 14.3443 16.5318 14.5163C16.3667 14.6583 16.2016 14.7183 16.0042 14.7045C15.8021 14.6929 15.5828 14.5659 15.3322 14.3166L13.9988 12.9923L12.5776 14.4066C12.3963 14.5983 12.222 14.7045 12.0326 14.738C11.9968 14.7437 11.9622 14.7472 11.9287 14.7472C11.7601 14.7472 11.6101 14.6699 11.4727 14.5128C11.3353 14.3524 11.2764 14.1861 11.2879 13.9887C11.2995 13.7809 11.4346 13.5557 11.6897 13.3214L13.0082 12.011L11.6493 10.6613C11.4542 10.4766 11.3318 10.278 11.2995 10.0898C11.2729 9.86587 11.3341 9.69384 11.49 9.53798C11.632 9.39598 11.7786 9.32786 11.9403 9.32786C12.1319 9.32786 12.3178 9.40406 12.5268 9.56915L12.5418 9.58185L13.9988 11.0227L15.4304 9.60725C15.6301 9.40752 15.8287 9.28976 16.0203 9.25743C16.227 9.23088 16.4025 9.29669 16.5618 9.45601C16.6992 9.58185 16.7719 9.7331 16.7719 9.89819C16.7604 10.1176 16.683 10.3023 16.5272 10.4882L16.5156 10.5009L14.9894 12.0017L16.4083 13.4126Z"
                fill="#1CC8EE"
              />
            </svg>
          </button>
        </div>
        <!-- 縣市選擇 -->
        <form v-if="cityBoard" class="form-city">
          <input v-model="selectedCity" value="Taipei" class="hide" type="radio" id="key1" />
          <label :class="{'button--selected' : selectedCity === 'Taipei' }" class="button button--small-text text-color-blue" for="key1"
            >台北市</label
          >
          <input v-model="selectedCity" value="NewTaipei" class="hide" type="radio" id="key2" />
          <label :class="{'button--selected' : selectedCity === 'NewTaipei' }" class="button button--small-text text-color-blue" for="key2"
            >新北市</label
          >
          <input v-model="selectedCity" value="Keelung" class="hide" type="radio" id="key3" />
          <label :class="{'button--selected' : selectedCity === 'Keelung' }" class="button button--small-text text-color-blue" for="key3"
            >基隆市</label
          >
          <input v-model="selectedCity" value="Taoyuan" class="hide" type="radio" id="key4" />
          <label :class="{'button--selected' : selectedCity === 'Taoyuan' }" class="button button--small-text text-color-blue" for="key4"
            >桃園市</label
          >
          <input v-model="selectedCity" value="Hsinchu" class="hide" type="radio" id="key5" />
          <label :class="{'button--selected' : selectedCity === 'Hsinchu' }" class="button button--small-text text-color-blue" for="key5"
            >新竹市</label
          >
          <input v-model="selectedCity" value="HsinchuCounty" class="hide" type="radio" id="key6" />
          <label :class="{'button--selected' : selectedCity === 'HsinchuCounty' }" class="button button--small-text text-color-blue" for="key6"
            >新竹縣</label
          >
          <input v-model="selectedCity" value="MiaoliCounty" class="hide" type="radio" id="key7" />
          <label :class="{'button--selected' : selectedCity === 'MiaoliCounty' }" class="button button--small-text text-color-blue" for="key7"
            >苗栗縣</label
          >
          <input v-model="selectedCity" value="Taichung" class="hide" type="radio" id="key8" />
          <label :class="{'button--selected' : selectedCity === 'Taichung' }" class="button button--small-text text-color-blue" for="key8"
            >台中市</label
          >
          <input v-model="selectedCity" value="NantouCounty" class="hide" type="radio" id="key9" />
          <label :class="{'button--selected' : selectedCity === 'NantouCounty' }" class="button button--small-text text-color-blue" for="key9"
            >南投縣</label
          >
          <input v-model="selectedCity" value="ChanghuaCounty" class="hide" type="radio" id="key10" />
          <label :class="{'button--selected' : selectedCity === 'ChanghuaCounty' }" class="button button--small-text text-color-blue" for="key10"
            >彰化縣</label
          >
          <input v-model="selectedCity" value="YunlinCounty" class="hide" type="radio" id="key11" />
          <label :class="{'button--selected' : selectedCity === 'YunlinCounty' }" class="button button--small-text text-color-blue" for="key11"
            >雲林縣</label
          >
          <input v-model="selectedCity" value="Chiayi" class="hide" type="radio" id="key12" />
          <label :class="{'button--selected' : selectedCity === 'Chiayi' }" class="button button--small-text text-color-blue" for="key12"
            >嘉義市</label
          >
          <input v-model="selectedCity" value="ChiayiCounty" class="hide" type="radio" id="key13" />
          <label :class="{'button--selected' : selectedCity === 'ChiayiCounty' }" class="button button--small-text text-color-blue" for="key13"
            >嘉義縣</label
          >
          <input v-model="selectedCity" value="Tainan" class="hide" type="radio" id="key14" />
          <label :class="{'button--selected' : selectedCity === 'Tainan' }" class="button button--small-text text-color-blue" for="key14"
            >台南市</label
          >
          <input v-model="selectedCity" value="Kaohsiung" class="hide" type="radio" id="key15" />
          <label :class="{'button--selected' : selectedCity === 'Kaohsiung' }" class="button button--small-text text-color-blue" for="key15"
            >高雄市</label
          >
          <input v-model="selectedCity" value="PingtungCounty" class="hide" type="radio" id="key16" />
          <label :class="{'button--selected' : selectedCity === 'PingtungCounty' }" class="button button--small-text text-color-blue" for="key16"
            >屏東縣</label
          >
          <input v-model="selectedCity" value="TaitungCounty" class="hide" type="radio" id="key17" />
          <label :class="{'button--selected' : selectedCity === 'TaitungCounty' }" class="button button--small-text text-color-blue" for="key17"
            >台東縣</label
          >
          <input v-model="selectedCity" value="HualienCounty" class="hide" type="radio" id="key18" />
          <label :class="{'button--selected' : selectedCity === 'HualienCounty' }" class="button button--small-text text-color-blue" for="key18"
            >花蓮縣</label
          >
          <input v-model="selectedCity" value="YilanCounty" class="hide" type="radio" id="key19" />
          <label :class="{'button--selected' : selectedCity === 'YilanCounty' }" class="button button--small-text text-color-blue" for="key19"
            >宜蘭縣</label
          >
          <input v-model="selectedCity" value="PenghuCounty" class="hide" type="radio" id="key20" />
          <label :class="{'button--selected' : selectedCity === 'PenghuCounty' }" class="button button--small-text text-color-blue" for="key20"
            >澎湖縣</label
          >
          <input v-model="selectedCity" value="KinmenCounty" class="hide" type="radio" id="key21" />
          <label :class="{'button--selected' : selectedCity === 'KinmenCounty' }" class="button button--small-text text-color-blue" for="key21"
            >金門縣</label
          >
          <input v-model="selectedCity" value="LienchiangCounty" class="hide" type="radio" id="key22" />
          <label :class="{'button--selected' : selectedCity === 'LienchiangCounty' }" class="button button--small-text text-color-blue" for="key22"
            >連江縣</label
          >
          <button @click.prevent="finishChoose" class="button button--small-text text-color-blue">
            設定
          </button>
        </form>
        <!-- 更多選擇 -->
        <form v-if="moreBoard" class="more-buttons">
          <button class="button text-color-blue">F</button>
          <button class="button text-color-blue">R</button>
          <button class="button text-color-blue">T</button>
          <button class="button text-color-blue">快</button>
          <button class="button text-color-blue">內科</button>
          <button class="button text-color-blue">跳蛙</button>
          <button class="button text-color-blue">通勤</button>
          <button class="button text-color-blue">南軟</button>
          <button class="button text-color-blue">先導</button>
          <button class="button text-color-blue">夜間</button>
          <button class="button text-color-blue">市民</button>
          <button class="button text-color-blue">其他</button>
          <button class="button text-color-blue">回上一頁</button>
        </form>
      </div>
      <!-- 輸入面板開關 -->
      <button @click="openMainBoard" v-if="!mainBoard && !cityBoard && !moreBoard" class="button button-keyboard-switch">
        <i class="fas fa-keyboard"></i>
      </button>
    </div>
    <!-- 搜尋內容 -->
    <div class="container__search-result">
      <h2 v-if="!warningMsg" class="heading">
        <i class="icon-position fas fa-map-marker-alt"></i>{{ currentCity }}
      </h2>
      <p v-if="warningMsg" class="hint-text"><span class="icon-warn"><i class="fas fa-exclamation-triangle"></i></span>請先選擇縣市</p>

      <p v-if="noResultMsg">查無搜尋結果</p>

      <template v-for="(item, index) of routeData" :key="index">
        <section class="card-info">
          <h3 class="card-info__title">{{ item.RouteName.Zh_tw }}</h3>
          <p class="card-info__text">{{ item.DepartureStopNameZh }}<span class="card-info__middle-text">往</span>{{ item.DestinationStopNameZh }}</p>
        </section>
      </template>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components.scss';
@import '@/assets/scss/search-local-bus.scss';
</style>

<script>
import GetAuthorizationHeader from '../lib/Authorization.js'
export default {
  name: 'SearchLocalBus',
  data () {
    return {
      mainBoard: true,
      cityBoard: false,
      moreBoard: false,
      warningMsg: false,
      noResultMsg: false,
      userInput: '',
      selectedCity: '',
      currentCity: '尚未選擇縣市',
      routeData: [],
      tempRouteData: []
    }
  },
  methods: {
    openCityBoard () {
      // 清除輸入文字
      this.userInput = ''
      // 關閉主功能面板
      this.mainBoard = false
      // 切換至選擇縣市面板
      this.cityBoard = true
    },
    openMoreBoard () {
      // 關閉主功能面板
      this.mainBoard = false
      // 切換至更多選項面板
      this.moreBoard = true
    },
    openMainBoard () {
      this.mainBoard = true
    },
    closeMainBoard () {
      this.mainBoard = false
    },
    async finishChoose () {
      if (this.selectedCity) {
        // 清除提示文字
        this.warningMsg = false
        // 送出請求。取得該縣市的公車路線資料
        this.routeData = await this.fetchRoute(this.selectedCity)
        // 拷貝資料
        this.tempRouteData = [...this.routeData]
        // 更新顯示文字
        this.currentCity = this.transferToZhTw(this.selectedCity)
        // 關閉選擇縣市面板
        this.cityBoard = false
        // 切回主功能面板
        this.mainBoard = true
      } else {
        this.warningMsg = true
      }
    },
    inputValue (value) {
      // 將值寫入 userInput
      this.userInput += value
    },
    removeLastChar () {
      // 移除最後一個字元
      this.userInput = this.userInput.slice(0, -1)
    },
    clearInput () {
      // 清空所有內容
      this.userInput = ''
    },
    fetchRoute (cityName) {
      return fetch(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${cityName}?$format=JSON`, { headers: GetAuthorizationHeader() })
        .then((response) => response.json())
        .then((json) => json)
    },
    transferToZhTw (string) {
      let result = ''
      switch (string) {
        case 'Taipei':
          result = '台北市'
          break
        case 'NewTaipei':
          result = '新北市'
          break
        case 'Keelung':
          result = '基隆市'
          break
        case 'Taoyuan':
          result = '桃園市'
          break
        case 'Hsinchu':
          result = '新竹市'
          break
        case 'HsinchuCounty':
          result = '新竹縣'
          break
        case 'MiaoliCounty':
          result = '苗栗縣'
          break
        case 'Taichung':
          result = '台中市'
          break
        case 'NantouCounty':
          result = '南投縣'
          break
        case 'ChanghuaCounty':
          result = '彰化縣'
          break
        case 'YunlinCounty':
          result = '雲林縣'
          break
        case 'Chiayi':
          result = '嘉義市'
          break
        case 'ChiayiCounty':
          result = '嘉義縣'
          break
        case 'Tainan':
          result = '台南市'
          break
        case 'Kaohsiung':
          result = '高雄市'
          break
        case 'PingtungCounty':
          result = '屏東縣'
          break
        case 'TaitungCounty':
          result = '台東縣'
          break
        case 'HualienCounty':
          result = '花蓮縣'
          break
        case 'YilanCounty':
          result = '宜蘭縣'
          break
        case 'PenghuCounty':
          result = '澎湖縣'
          break
        case 'KinmenCounty':
          result = '金門縣'
          break
        case 'LienchiangCounty':
          result = '連江縣'
          break
      }
      return result
    },
    searchData (array, string) {
      return array.filter(function (item) {
        return item.RouteName.Zh_tw.includes(string)
      })
    }
  },
  watch: {
    userInput: function (val) {
      // 若 userInput 為空字串
      if (!this.selectedCity) {
        console.log('請選擇縣市')
        // 顯示提示文字
        this.warningMsg = true
      } else {
        // 從拷貝資料中做篩選
        this.routeData = this.searchData(this.tempRouteData, val)
        // 若找無結果，顯示提示文字
        if (this.routeData.length === 0) {
          this.noResultMsg = true
        } else {
          this.noResultMsg = false
        }
      }
    }
  }
}
</script>
