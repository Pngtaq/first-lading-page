export default function Navigation() {
  return (
    <div>
      <nav className="flex justify-between px-32 py-10 items-center font-semibold">
        <div className="flex items-center gap-x-4">
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.55273 4.09787C7.12207 5.09823 5.82837 6.28098 4.70532 7.6124C9.29462 7.18633 15.1252 7.88204 21.8944 11.2667C29.123 14.8809 34.9438 15.0031 38.9948 14.2217C38.6272 13.1088 38.1644 12.0392 37.6163 11.0224C32.979 11.5115 27.034 10.8641 20.1056 7.39998C15.706 5.20018 11.8278 4.29401 8.55273 4.09787ZM34.9074 7.16665C31.2453 3.075 25.9234 0.5 20 0.5C18.2605 0.5 16.5727 0.722107 14.9637 1.13948C17.1429 1.73409 19.4579 2.60399 21.8944 3.82227C26.967 6.35853 31.3464 7.17516 34.9074 7.16665ZM39.8609 18.1281C34.9669 19.0945 28.2088 18.896 20.1056 14.8444C12.53 11.0566 6.50043 11.1043 2.4339 12.008C2.224 12.0546 2.01904 12.1036 1.81903 12.1546C1.28662 13.3125 0.861634 14.5301 0.556702 15.7945C0.882386 15.7075 1.21893 15.6248 1.56616 15.5476C6.49957 14.4513 13.4701 14.4989 21.8944 18.7111C29.4701 22.4989 35.4996 22.4512 39.5662 21.5475C39.7055 21.5166 39.8428 21.4846 39.9778 21.4516C39.9926 21.1363 40 20.819 40 20.5C40 19.6975 39.9528 18.906 39.8609 18.1281ZM39.3248 25.6723C34.4783 26.5196 27.917 26.1944 20.1056 22.2888C12.53 18.501 6.50043 18.5487 2.4339 19.4524C1.53125 19.6529 0.719239 19.8972 0.00293 20.1551C0.000977 20.2698 0 20.3848 0 20.5C0 31.5457 8.95429 40.5 20 40.5C29.2571 40.5 37.0453 34.2109 39.3248 25.6723Z"
              fill="url(#paint0_linear_1156_735)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1156_735"
                x1="36"
                y1="43.7"
                x2="-3.73321"
                y2="36.0931"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5D50C6" />
                <stop offset="1" stop-color="#F85E9F" />
              </linearGradient>
            </defs>
          </svg>

          <h3 className="font-bold text-xl">Travlog</h3>
        </div>

        <div className="flex gap-x-24">
          <div>Home</div>
          <div>Discover</div>
          <div>Special Deals</div>
          <div>Contact</div>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <button>Log In</button>
          </div>
          <div>
            <button className="bg-violet-600 text-white px-6 py-3 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
