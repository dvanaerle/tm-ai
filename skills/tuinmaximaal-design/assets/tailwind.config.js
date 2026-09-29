// Generated from the Valantic base theme by tools/design-sync/sync.mjs. Do not edit by hand.
// Load after https://cdn.tailwindcss.com?plugins=forms,typography,container-queries
tailwind.config = {
  "theme": {
    "extend": {
      "screens": {
        "500px": "500px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      },
      "container": {
        "center": true,
        "padding": "1rem",
        "screens": {
          "xl": "1314px",
          "2xl": "1314px"
        }
      },
      "spacing": {
        "0": "0rem",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "8": "2rem",
        "9": "2.25rem",
        "10": "2.5rem",
        "11": "2.75rem",
        "12": "3rem",
        "13": "3.25rem",
        "14": "3.5rem",
        "15": "3.75rem",
        "16": "4rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "20": "5rem",
        "21": "5.25rem",
        "22": "5.5rem",
        "23": "5.75rem",
        "24": "6rem",
        "25": "6.25rem",
        "26": "6.5rem",
        "27": "6.75rem",
        "28": "7rem",
        "29": "7.25rem",
        "30": "7.5rem",
        "31": "7.75rem",
        "32": "8rem",
        "33": "8.25rem",
        "34": "8.5rem",
        "35": "8.75rem",
        "36": "9rem",
        "37": "9.25rem",
        "38": "9.5rem",
        "39": "9.75rem",
        "40": "10rem",
        "41": "10.25rem",
        "42": "10.5rem",
        "43": "10.75rem",
        "44": "11rem",
        "45": "11.25rem",
        "46": "11.5rem",
        "47": "11.75rem",
        "48": "12rem",
        "49": "12.25rem",
        "50": "12.5rem",
        "51": "12.75rem",
        "52": "13rem",
        "53": "13.25rem",
        "54": "13.5rem",
        "55": "13.75rem",
        "56": "14rem",
        "57": "14.25rem",
        "58": "14.5rem",
        "59": "14.75rem",
        "60": "15rem",
        "61": "15.25rem",
        "62": "15.5rem",
        "63": "15.75rem",
        "64": "16rem",
        "65": "16.25rem",
        "66": "16.5rem",
        "67": "16.75rem",
        "68": "17rem",
        "69": "17.25rem",
        "70": "17.5rem",
        "71": "17.75rem",
        "72": "18rem",
        "73": "18.25rem",
        "74": "18.5rem",
        "75": "18.75rem",
        "76": "19rem",
        "77": "19.25rem",
        "78": "19.5rem",
        "79": "19.75rem",
        "80": "20rem",
        "81": "20.25rem",
        "82": "20.5rem",
        "83": "20.75rem",
        "84": "21rem",
        "85": "21.25rem",
        "86": "21.5rem",
        "87": "21.75rem",
        "88": "22rem",
        "89": "22.25rem",
        "90": "22.5rem",
        "91": "22.75rem",
        "92": "23rem",
        "93": "23.25rem",
        "94": "23.5rem",
        "95": "23.75rem",
        "96": "24rem",
        "97": "24.25rem",
        "98": "24.5rem",
        "99": "24.75rem",
        "100": "25rem",
        "101": "25.25rem",
        "102": "25.5rem",
        "103": "25.75rem",
        "104": "26rem",
        "105": "26.25rem",
        "106": "26.5rem",
        "107": "26.75rem",
        "108": "27rem",
        "109": "27.25rem",
        "110": "27.5rem",
        "111": "27.75rem",
        "112": "28rem",
        "113": "28.25rem",
        "114": "28.5rem",
        "115": "28.75rem",
        "116": "29rem",
        "117": "29.25rem",
        "118": "29.5rem",
        "119": "29.75rem",
        "120": "30rem",
        "121": "30.25rem",
        "122": "30.5rem",
        "123": "30.75rem",
        "124": "31rem",
        "125": "31.25rem",
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "9.5": "2.375rem",
        "10.5": "2.625rem",
        "11.5": "2.875rem",
        "12.5": "3.125rem",
        "13.5": "3.375rem",
        "14.5": "3.625rem",
        "15.5": "3.875rem",
        "16.5": "4.125rem",
        "17.5": "4.375rem",
        "18.5": "4.625rem",
        "19.5": "4.875rem",
        "20.5": "5.125rem",
        "21.5": "5.375rem",
        "22.5": "5.625rem",
        "23.5": "5.875rem",
        "24.5": "6.125rem",
        "25.5": "6.375rem",
        "26.5": "6.625rem",
        "27.5": "6.875rem",
        "28.5": "7.125rem",
        "29.5": "7.375rem",
        "30.5": "7.625rem",
        "31.5": "7.875rem",
        "32.5": "8.125rem",
        "33.5": "8.375rem",
        "34.5": "8.625rem",
        "35.5": "8.875rem",
        "36.5": "9.125rem",
        "37.5": "9.375rem",
        "38.5": "9.625rem",
        "39.5": "9.875rem",
        "40.5": "10.125rem",
        "41.5": "10.375rem",
        "42.5": "10.625rem",
        "43.5": "10.875rem",
        "44.5": "11.125rem",
        "45.5": "11.375rem",
        "46.5": "11.625rem",
        "47.5": "11.875rem",
        "48.5": "12.125rem",
        "49.5": "12.375rem",
        "50.5": "12.625rem",
        "51.5": "12.875rem",
        "52.5": "13.125rem",
        "53.5": "13.375rem",
        "54.5": "13.625rem",
        "55.5": "13.875rem",
        "56.5": "14.125rem",
        "57.5": "14.375rem",
        "58.5": "14.625rem",
        "59.5": "14.875rem",
        "60.5": "15.125rem",
        "61.5": "15.375rem",
        "62.5": "15.625rem",
        "63.5": "15.875rem",
        "64.5": "16.125rem",
        "65.5": "16.375rem",
        "66.5": "16.625rem",
        "67.5": "16.875rem",
        "68.5": "17.125rem",
        "69.5": "17.375rem",
        "70.5": "17.625rem",
        "71.5": "17.875rem",
        "72.5": "18.125rem",
        "73.5": "18.375rem",
        "74.5": "18.625rem",
        "75.5": "18.875rem",
        "76.5": "19.125rem",
        "77.5": "19.375rem",
        "78.5": "19.625rem",
        "79.5": "19.875rem",
        "80.5": "20.125rem",
        "81.5": "20.375rem",
        "82.5": "20.625rem",
        "83.5": "20.875rem",
        "84.5": "21.125rem",
        "85.5": "21.375rem",
        "86.5": "21.625rem",
        "87.5": "21.875rem",
        "88.5": "22.125rem",
        "89.5": "22.375rem",
        "90.5": "22.625rem",
        "91.5": "22.875rem",
        "92.5": "23.125rem",
        "93.5": "23.375rem",
        "94.5": "23.625rem",
        "95.5": "23.875rem",
        "96.5": "24.125rem",
        "97.5": "24.375rem",
        "98.5": "24.625rem",
        "99.5": "24.875rem",
        "100.5": "25.125rem",
        "101.5": "25.375rem",
        "102.5": "25.625rem",
        "103.5": "25.875rem",
        "104.5": "26.125rem",
        "105.5": "26.375rem",
        "106.5": "26.625rem",
        "107.5": "26.875rem",
        "108.5": "27.125rem",
        "109.5": "27.375rem",
        "110.5": "27.625rem",
        "111.5": "27.875rem",
        "112.5": "28.125rem",
        "113.5": "28.375rem",
        "114.5": "28.625rem",
        "115.5": "28.875rem",
        "116.5": "29.125rem",
        "117.5": "29.375rem",
        "118.5": "29.625rem",
        "119.5": "29.875rem",
        "120.5": "30.125rem",
        "121.5": "30.375rem",
        "122.5": "30.625rem",
        "123.5": "30.875rem",
        "124.5": "31.125rem",
        "125.5": "31.375rem",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "full": "100%",
        "full-x2": "200%"
      },
      "fontFamily": {
        "body": [
          "ArticulatCF",
          "system-ui",
          "sans-serif"
        ]
      },
      "fontSize": {
        "3": [
          "0.75rem",
          "1.5"
        ],
        "4": [
          "1rem",
          "1.5"
        ],
        "5": [
          "1.25rem",
          "1.5"
        ],
        "6": [
          "1.5rem",
          "1.25"
        ],
        "7": [
          "1.75rem",
          "1.25"
        ],
        "base": [
          "1rem",
          "1.5"
        ],
        "2.5": [
          "0.625rem",
          "1.5"
        ],
        "3.5": [
          "0.875rem",
          "1.5"
        ],
        "3.75": [
          "0.9375rem",
          "1.5"
        ],
        "4.5": [
          "1.125rem",
          "1.5"
        ],
        "4.75": [
          "1.1875rem",
          "1"
        ],
        "5.5": [
          "1.375rem",
          "1.5"
        ]
      },
      "letterSpacing": {
        "loose": "0.25rem"
      },
      "lineHeight": {
        "11": "2.75rem",
        "12": "3rem",
        "5.5": "1.375rem",
        "7.5": "1.875rem"
      },
      "borderRadius": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1.0rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem"
      },
      "colors": {
        "tmx": {
          "primary": {
            "darkGreen": "#001A13",
            "green": "#003017",
            "mediumGreen": "#002E21",
            "orange": "#FF8000",
            "lighterGreen": "#809700",
            "lighterGreenSubtle": "#F8FCE6",
            "lighterGreenSecond": "#8BA407",
            "lightGreen": "#6D8005",
            "blue": "#80A5E4",
            "yellow": "#FFCB00",
            "red": "#FF4D4D",
            "black": "#11171F",
            "brown": "#8A7B6C"
          },
          "secondary": {
            "sand": "#F5E6D7",
            "beige": "#FFF5ED",
            "bone": "#E0D2C5"
          },
          "neutral": {
            "grey": "#636363",
            "mediumGrey": "#878787",
            "lightGrey": "#E3E3E3",
            "lightestGrey": "#f9fafb",
            "white": "#FFFFFF",
            "darkGrey": "#151A1F"
          },
          "status": {
            "info": {
              "subtle": "#f0f9ff",
              "DEFAULT": "#0284c7",
              "text": "#0369a1",
              "strong": "#0c4a6e"
            },
            "error": {
              "subtle": "#fef2f2",
              "DEFAULT": "#dc2626",
              "text": "#b91c1c",
              "strong": "#7f1d1d"
            },
            "success": {
              "subtle": "#f0fdf4",
              "DEFAULT": "#16a34a",
              "text": "#15803d",
              "strong": "#14532d"
            },
            "warning": {
              "subtle": "#fffbeb",
              "DEFAULT": "#d97706",
              "text": "#b45309",
              "strong": "#78350f"
            },
            "neutral": {
              "subtle": "#f5f5f5",
              "DEFAULT": "#525252",
              "text": "#404040",
              "strong": "#171717"
            }
          }
        }
      },
      "textColor": {
        "body": {
          "DEFAULT": "#003017"
        },
        "heading": {
          "highlight": {
            "DEFAULT": "#fff"
          }
        },
        "showMore": {
          "DEFAULT": "#11171F"
        },
        "btn": {
          "primary": {
            "DEFAULT": "#fff",
            "hover": "#fff"
          },
          "secondary": {
            "DEFAULT": "#003017",
            "hover": "#fff"
          },
          "tertiary": {
            "DEFAULT": "#003017",
            "hover": "#809700"
          }
        },
        "link": {
          "DEFAULT": "#003017",
          "main": "#809700",
          "hover": "#809700",
          "secondHover": "#8BA407"
        },
        "header": {
          "serviceLink": {
            "DEFAULT": "#6D8005"
          },
          "usps": {
            "DEFAULT": "#F5E6D7",
            "link": "#809700"
          }
        },
        "menu": {
          "DEFAULT": "#003017"
        },
        "breadcrumbs": {
          "DEFAULT": "#8A7B6C"
        },
        "form": {
          "label": {
            "DEFAULT": "#636363"
          },
          "input": {
            "DEFAULT": "#003017",
            "placeholder": "#636363",
            "choice": {
              "glyph": {
                "DEFAULT": "#fff",
                "inactive": "#E3E3E3"
              }
            }
          },
          "tooltip": {
            "icon": {
              "DEFAULT": "#636363",
              "hover": "#636363"
            }
          }
        },
        "blog": {
          "link": "#FF8000"
        },
        "tmx": {
          "primary": {
            "darkGreen": "#001A13",
            "green": "#003017",
            "mediumGreen": "#002E21",
            "orange": "#FF8000",
            "lighterGreen": "#809700",
            "lighterGreenSubtle": "#F8FCE6",
            "lighterGreenSecond": "#8BA407",
            "lightGreen": "#6D8005",
            "blue": "#80A5E4",
            "yellow": "#FFCB00",
            "red": "#FF4D4D",
            "black": "#11171F",
            "brown": "#8A7B6C"
          },
          "secondary": {
            "sand": "#F5E6D7",
            "beige": "#FFF5ED",
            "bone": "#E0D2C5"
          },
          "neutral": {
            "grey": "#636363",
            "mediumGrey": "#878787",
            "lightGrey": "#E3E3E3",
            "lightestGrey": "#f9fafb",
            "white": "#FFFFFF",
            "darkGrey": "#151A1F"
          },
          "status": {
            "info": {
              "subtle": "#f0f9ff",
              "DEFAULT": "#0284c7",
              "text": "#0369a1",
              "strong": "#0c4a6e"
            },
            "error": {
              "subtle": "#fef2f2",
              "DEFAULT": "#dc2626",
              "text": "#b91c1c",
              "strong": "#7f1d1d"
            },
            "success": {
              "subtle": "#f0fdf4",
              "DEFAULT": "#16a34a",
              "text": "#15803d",
              "strong": "#14532d"
            },
            "warning": {
              "subtle": "#fffbeb",
              "DEFAULT": "#d97706",
              "text": "#b45309",
              "strong": "#78350f"
            },
            "neutral": {
              "subtle": "#f5f5f5",
              "DEFAULT": "#525252",
              "text": "#404040",
              "strong": "#171717"
            }
          }
        }
      },
      "backgroundColor": {
        "primary": {
          "darkGreen": "#001A13",
          "green": "#003017",
          "mediumGreen": "#002E21",
          "orange": "#FF8000",
          "lighterGreen": "#809700",
          "lighterGreenSubtle": "#F8FCE6",
          "lighterGreenSecond": "#8BA407",
          "lightGreen": "#6D8005",
          "blue": "#80A5E4",
          "yellow": "#FFCB00",
          "red": "#FF4D4D",
          "black": "#11171F",
          "brown": "#8A7B6C"
        },
        "secondary": {
          "sand": "#F5E6D7",
          "beige": "#FFF5ED",
          "bone": "#E0D2C5"
        },
        "neutral": {
          "grey": "#636363",
          "mediumGrey": "#878787",
          "lightGrey": "#E3E3E3",
          "lightestGrey": "#f9fafb",
          "white": "#FFFFFF",
          "darkGrey": "#151A1F"
        },
        "status": {
          "info": {
            "subtle": "#f0f9ff",
            "DEFAULT": "#0284c7",
            "text": "#0369a1",
            "strong": "#0c4a6e"
          },
          "error": {
            "subtle": "#fef2f2",
            "DEFAULT": "#dc2626",
            "text": "#b91c1c",
            "strong": "#7f1d1d"
          },
          "success": {
            "subtle": "#f0fdf4",
            "DEFAULT": "#16a34a",
            "text": "#15803d",
            "strong": "#14532d"
          },
          "warning": {
            "subtle": "#fffbeb",
            "DEFAULT": "#d97706",
            "text": "#b45309",
            "strong": "#78350f"
          },
          "neutral": {
            "subtle": "#f5f5f5",
            "DEFAULT": "#525252",
            "text": "#404040",
            "strong": "#171717"
          }
        },
        "heading": {
          "highlight": {
            "DEFAULT": "#FF8000"
          }
        },
        "btn": {
          "primary": {
            "DEFAULT": "#809700",
            "hover": "#6D8005"
          },
          "secondary": {
            "DEFAULT": "transparent",
            "hover": "#003017"
          },
          "tertiary": {
            "DEFAULT": "#fff",
            "hover": "#fff"
          }
        },
        "header": {
          "DEFAULT": "#003017",
          "logo": {
            "DEFAULT": "#003017"
          },
          "search": {
            "DEFAULT": "#001A13"
          },
          "cartCount": {
            "DEFAULT": "#FF8000"
          },
          "customerService": {
            "DEFAULT": "#003017"
          },
          "mobileSearch": {
            "DEFAULT": "#F5E6D7"
          },
          "login": {
            "loggedOut": "#FF4D4D",
            "loggedIn": "#6D8005"
          }
        },
        "menu": {
          "DEFAULT": "#F5E6D7",
          "mobile": "#FFF5ED",
          "activeMenuItem": "#FF8000"
        },
        "usps": {
          "DEFAULT": "#FFF5ED",
          "mobile": "#F5E6D7"
        },
        "price": {
          "DEFAULT": "#FF8000"
        },
        "category": {
          "DEFAULT": "#FFF5ED"
        },
        "breadcrumbs": {
          "DEFAULT": "#FFF5ED"
        },
        "sliderDots": {
          "DEFAULT": "#E3E3E3",
          "active": "#878787"
        },
        "pager": {
          "DEFAULT": "#809700"
        },
        "amasty": {
          "tooltip": "#FF8000",
          "header": "#003017",
          "sliderPriceDefault": "#E3E3E3",
          "sliderPriceActive": "#003017"
        },
        "blog": {
          "item": "#E3E3E3",
          "catLink": "#003017"
        },
        "mirasvitSearch": {
          "suggestions": "#E3E3E3",
          "suggestionsHover": "#8BA407"
        },
        "footer": {
          "DEFAULT": "#003017"
        },
        "form": {
          "input": {
            "DEFAULT": "#fff",
            "error": "#fff",
            "success": "#fff",
            "choice": {
              "DEFAULT": "#fff",
              "hover": "transparent",
              "active": "#809700",
              "inactive": "#fff"
            }
          }
        },
        "container": {
          "lighter": "#ffffff",
          "DEFAULT": "#fafafa",
          "darker": "#f5f5f5",
          "beige": "#FFF5ED"
        },
        "tmx": {
          "primary": {
            "darkGreen": "#001A13",
            "green": "#003017",
            "mediumGreen": "#002E21",
            "orange": "#FF8000",
            "lighterGreen": "#809700",
            "lighterGreenSubtle": "#F8FCE6",
            "lighterGreenSecond": "#8BA407",
            "lightGreen": "#6D8005",
            "blue": "#80A5E4",
            "yellow": "#FFCB00",
            "red": "#FF4D4D",
            "black": "#11171F",
            "brown": "#8A7B6C"
          },
          "secondary": {
            "sand": "#F5E6D7",
            "beige": "#FFF5ED",
            "bone": "#E0D2C5"
          },
          "neutral": {
            "grey": "#636363",
            "mediumGrey": "#878787",
            "lightGrey": "#E3E3E3",
            "lightestGrey": "#f9fafb",
            "white": "#FFFFFF",
            "darkGrey": "#151A1F"
          },
          "status": {
            "info": {
              "subtle": "#f0f9ff",
              "DEFAULT": "#0284c7",
              "text": "#0369a1",
              "strong": "#0c4a6e"
            },
            "error": {
              "subtle": "#fef2f2",
              "DEFAULT": "#dc2626",
              "text": "#b91c1c",
              "strong": "#7f1d1d"
            },
            "success": {
              "subtle": "#f0fdf4",
              "DEFAULT": "#16a34a",
              "text": "#15803d",
              "strong": "#14532d"
            },
            "warning": {
              "subtle": "#fffbeb",
              "DEFAULT": "#d97706",
              "text": "#b45309",
              "strong": "#78350f"
            },
            "neutral": {
              "subtle": "#f5f5f5",
              "DEFAULT": "#525252",
              "text": "#404040",
              "strong": "#171717"
            }
          }
        }
      },
      "borderColor": {
        "primary": {
          "darkGreen": "#001A13",
          "green": "#003017",
          "mediumGreen": "#002E21",
          "orange": "#FF8000",
          "lighterGreen": "#809700",
          "lighterGreenSubtle": "#F8FCE6",
          "lighterGreenSecond": "#8BA407",
          "lightGreen": "#6D8005",
          "blue": "#80A5E4",
          "yellow": "#FFCB00",
          "red": "#FF4D4D",
          "black": "#11171F",
          "brown": "#8A7B6C"
        },
        "secondary": {
          "sand": "#F5E6D7",
          "beige": "#FFF5ED",
          "bone": "#E0D2C5"
        },
        "neutral": {
          "grey": "#636363",
          "mediumGrey": "#878787",
          "lightGrey": "#E3E3E3",
          "lightestGrey": "#f9fafb",
          "white": "#FFFFFF",
          "darkGrey": "#151A1F"
        },
        "status": {
          "info": {
            "subtle": "#f0f9ff",
            "DEFAULT": "#0284c7",
            "text": "#0369a1",
            "strong": "#0c4a6e"
          },
          "error": {
            "subtle": "#fef2f2",
            "DEFAULT": "#dc2626",
            "text": "#b91c1c",
            "strong": "#7f1d1d"
          },
          "success": {
            "subtle": "#f0fdf4",
            "DEFAULT": "#16a34a",
            "text": "#15803d",
            "strong": "#14532d"
          },
          "warning": {
            "subtle": "#fffbeb",
            "DEFAULT": "#d97706",
            "text": "#b45309",
            "strong": "#78350f"
          },
          "neutral": {
            "subtle": "#f5f5f5",
            "DEFAULT": "#525252",
            "text": "#404040",
            "strong": "#171717"
          }
        },
        "btn": {
          "primary": {
            "DEFAULT": "#6D8005",
            "hover": "#6D8005"
          },
          "secondary": {
            "DEFAULT": "#003017",
            "hover": "#003017"
          },
          "tertiary": {
            "DEFAULT": "#fff",
            "hover": "#fff"
          }
        },
        "logo": {
          "DEFAULT": "#001A13"
        },
        "usps": {
          "DEFAULT": "#F5E6D7"
        },
        "menuMobile": {
          "DEFAULT": "#E0D2C5"
        },
        "activeMenuItem": {
          "DEFAULT": "#FF8000"
        },
        "productTile": {
          "DEFAULT": "#E3E3E3",
          "hover": "#003017"
        },
        "contentBlock": {
          "DEFAULT": "#F5E6D7"
        },
        "currentFilters": {
          "DEFAULT": "#003017"
        },
        "filterCard": {
          "DEFAULT": "#E3E3E3"
        },
        "searchAutocomplete": {
          "DEFAULT": "#E3E3E3"
        },
        "amasty": {
          "delimiter": "#003017"
        },
        "form": {
          "input": {
            "DEFAULT": "#E3E3E3",
            "hover": "#636363",
            "focus": "#636363",
            "error": "#dc2626",
            "success": "#16a34a",
            "choice": {
              "DEFAULT": "#E3E3E3",
              "hover": "#636363",
              "focus": "#636363",
              "active": "#809700",
              "error": "#dc2626",
              "inactive": "#E3E3E3"
            }
          }
        },
        "tmx": {
          "primary": {
            "darkGreen": "#001A13",
            "green": "#003017",
            "mediumGreen": "#002E21",
            "orange": "#FF8000",
            "lighterGreen": "#809700",
            "lighterGreenSubtle": "#F8FCE6",
            "lighterGreenSecond": "#8BA407",
            "lightGreen": "#6D8005",
            "blue": "#80A5E4",
            "yellow": "#FFCB00",
            "red": "#FF4D4D",
            "black": "#11171F",
            "brown": "#8A7B6C"
          },
          "secondary": {
            "sand": "#F5E6D7",
            "beige": "#FFF5ED",
            "bone": "#E0D2C5"
          },
          "neutral": {
            "grey": "#636363",
            "mediumGrey": "#878787",
            "lightGrey": "#E3E3E3",
            "lightestGrey": "#f9fafb",
            "white": "#FFFFFF",
            "darkGrey": "#151A1F"
          },
          "status": {
            "info": {
              "subtle": "#f0f9ff",
              "DEFAULT": "#0284c7",
              "text": "#0369a1",
              "strong": "#0c4a6e"
            },
            "error": {
              "subtle": "#fef2f2",
              "DEFAULT": "#dc2626",
              "text": "#b91c1c",
              "strong": "#7f1d1d"
            },
            "success": {
              "subtle": "#f0fdf4",
              "DEFAULT": "#16a34a",
              "text": "#15803d",
              "strong": "#14532d"
            },
            "warning": {
              "subtle": "#fffbeb",
              "DEFAULT": "#d97706",
              "text": "#b45309",
              "strong": "#78350f"
            },
            "neutral": {
              "subtle": "#f5f5f5",
              "DEFAULT": "#525252",
              "text": "#404040",
              "strong": "#171717"
            }
          }
        }
      },
      "ringColor": {
        "form": {
          "input": {
            "DEFAULT": "#636363",
            "error": "#dc2626",
            "success": "#16a34a",
            "choice": {
              "DEFAULT": "#636363"
            }
          }
        },
        "tmx": {
          "primary": {
            "darkGreen": "#001A13",
            "green": "#003017",
            "mediumGreen": "#002E21",
            "orange": "#FF8000",
            "lighterGreen": "#809700",
            "lighterGreenSubtle": "#F8FCE6",
            "lighterGreenSecond": "#8BA407",
            "lightGreen": "#6D8005",
            "blue": "#80A5E4",
            "yellow": "#FFCB00",
            "red": "#FF4D4D",
            "black": "#11171F",
            "brown": "#8A7B6C"
          },
          "secondary": {
            "sand": "#F5E6D7",
            "beige": "#FFF5ED",
            "bone": "#E0D2C5"
          },
          "neutral": {
            "grey": "#636363",
            "mediumGrey": "#878787",
            "lightGrey": "#E3E3E3",
            "lightestGrey": "#f9fafb",
            "white": "#FFFFFF",
            "darkGrey": "#151A1F"
          },
          "status": {
            "info": {
              "subtle": "#f0f9ff",
              "DEFAULT": "#0284c7",
              "text": "#0369a1",
              "strong": "#0c4a6e"
            },
            "error": {
              "subtle": "#fef2f2",
              "DEFAULT": "#dc2626",
              "text": "#b91c1c",
              "strong": "#7f1d1d"
            },
            "success": {
              "subtle": "#f0fdf4",
              "DEFAULT": "#16a34a",
              "text": "#15803d",
              "strong": "#14532d"
            },
            "warning": {
              "subtle": "#fffbeb",
              "DEFAULT": "#d97706",
              "text": "#b45309",
              "strong": "#78350f"
            },
            "neutral": {
              "subtle": "#f5f5f5",
              "DEFAULT": "#525252",
              "text": "#404040",
              "strong": "#171717"
            }
          }
        }
      },
      "boxShadow": {
        "1px": "inset 0 0 0 1px#003017",
        "arrow": "0 4px 12px 0 rgb(0 0 0 / 0.16)"
      },
      "backgroundImage": {
        "gradient-showMore": "linear-gradient(to bottom, rgba(255, 255, 255, 0.00) 0%, #FFFFFF 65%)"
      },
      "content": {
        "asterisk": "\"*\"",
        "empty": "\"\"",
        "dash": "\"-\"",
        "separator": "\"|\""
      },
      "transitionProperty": {
        "border": "border-color"
      },
      "minHeight": {
        "screen-25": "25vh",
        "screen-50": "50vh",
        "screen-75": "75vh"
      },
      "maxHeight": {
        "0": "0",
        "screen-25": "25vh",
        "screen-50": "50vh",
        "screen-75": "75vh"
      },
      "aria": {
        "invalid": "invalid=\"true\""
      }
    }
  }
};
