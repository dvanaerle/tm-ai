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
        "primary": {
          "DEFAULT": "rgb(var(--color-primary) / <alpha-value>)",
          "dark": "rgb(var(--color-primary-dark) / <alpha-value>)"
        },
        "secondary": {
          "subtle": "rgb(var(--color-secondary-subtle) / <alpha-value>)",
          "DEFAULT": "rgb(var(--color-secondary) / <alpha-value>)",
          "strong": "rgb(var(--color-secondary-strong) / <alpha-value>)"
        },
        "tmx": {
          "primary": {
            "darkGreen": "rgb(var(--color-primary-dark) / <alpha-value>)",
            "green": "rgb(var(--color-primary) / <alpha-value>)",
            "mediumGreen": "#002E21",
            "orange": "rgb(var(--color-accent) / <alpha-value>)",
            "lighterGreen": "rgb(var(--color-secondary) / <alpha-value>)",
            "lighterGreenSubtle": "rgb(var(--color-secondary-subtle) / <alpha-value>)",
            "lighterGreenSecond": "#8BA407",
            "lightGreen": "rgb(var(--color-secondary-strong) / <alpha-value>)",
            "blue": "#80A5E4",
            "yellow": "#FFCB00",
            "red": "#FF4D4D",
            "black": "#11171F",
            "brown": "#8A7B6C"
          },
          "secondary": {
            "sand": "rgb(var(--color-surface-raised) / <alpha-value>)",
            "beige": "rgb(var(--color-surface) / <alpha-value>)",
            "bone": "rgb(var(--color-surface-strong) / <alpha-value>)"
          },
          "neutral": {
            "grey": "rgb(var(--color-border-strong) / <alpha-value>)",
            "mediumGrey": "#878787",
            "lightGrey": "rgb(var(--color-border) / <alpha-value>)",
            "lightestGrey": "#f9fafb",
            "white": "#FFFFFF",
            "darkGrey": "#151A1F"
          },
          "status": {
            "info": {
              "subtle": "rgb(var(--color-info-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-info) / <alpha-value>)",
              "text": "rgb(var(--color-info-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-info-subtle) / <alpha-value>)"
            },
            "error": {
              "subtle": "rgb(var(--color-danger-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-danger) / <alpha-value>)",
              "text": "rgb(var(--color-danger-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-danger-subtle) / <alpha-value>)"
            },
            "success": {
              "subtle": "rgb(var(--color-success-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-success) / <alpha-value>)",
              "text": "rgb(var(--color-success-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-success-subtle) / <alpha-value>)"
            },
            "warning": {
              "subtle": "rgb(var(--color-warning-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-warning) / <alpha-value>)",
              "text": "rgb(var(--color-warning-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-warning-subtle) / <alpha-value>)"
            },
            "neutral": {
              "subtle": "#f5f5f5",
              "DEFAULT": "#525252",
              "text": "#404040",
              "strong": "#171717"
            }
          }
        },
        "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
        "on-secondary": "rgb(var(--color-on-secondary) / <alpha-value>)",
        "accent": "rgb(var(--color-accent) / <alpha-value>)",
        "on-accent": "rgb(var(--color-on-accent) / <alpha-value>)",
        "surface": {
          "DEFAULT": "rgb(var(--color-surface) / <alpha-value>)",
          "raised": "rgb(var(--color-surface-raised) / <alpha-value>)",
          "strong": "rgb(var(--color-surface-strong) / <alpha-value>)"
        },
        "on-surface": "rgb(var(--color-on-surface) / <alpha-value>)",
        "text": {
          "DEFAULT": "rgb(var(--color-text) / <alpha-value>)",
          "muted": "rgb(var(--color-text-muted) / <alpha-value>)"
        },
        "link": {
          "DEFAULT": "rgb(var(--color-link) / <alpha-value>)",
          "hover": "rgb(var(--color-link-hover) / <alpha-value>)"
        },
        "ring": "rgb(var(--color-ring) / <alpha-value>)",
        "border": {
          "DEFAULT": "rgb(var(--color-border) / <alpha-value>)",
          "strong": "rgb(var(--color-border-strong) / <alpha-value>)"
        },
        "warning": {
          "subtle": "rgb(var(--color-warning-subtle) / <alpha-value>)",
          "DEFAULT": "rgb(var(--color-warning) / <alpha-value>)",
          "text": "rgb(var(--color-warning-text) / <alpha-value>)"
        },
        "on-warning-subtle": "rgb(var(--color-on-warning-subtle) / <alpha-value>)",
        "danger": {
          "subtle": "rgb(var(--color-danger-subtle) / <alpha-value>)",
          "DEFAULT": "rgb(var(--color-danger) / <alpha-value>)",
          "text": "rgb(var(--color-danger-text) / <alpha-value>)"
        },
        "on-danger-subtle": "rgb(var(--color-on-danger-subtle) / <alpha-value>)",
        "success": {
          "subtle": "rgb(var(--color-success-subtle) / <alpha-value>)",
          "DEFAULT": "rgb(var(--color-success) / <alpha-value>)",
          "text": "rgb(var(--color-success-text) / <alpha-value>)"
        },
        "on-success-subtle": "rgb(var(--color-on-success-subtle) / <alpha-value>)",
        "info": {
          "subtle": "rgb(var(--color-info-subtle) / <alpha-value>)",
          "DEFAULT": "rgb(var(--color-info) / <alpha-value>)",
          "text": "rgb(var(--color-info-text) / <alpha-value>)"
        },
        "on-info-subtle": "rgb(var(--color-on-info-subtle) / <alpha-value>)"
      },
      "textColor": {
        "body": {
          "DEFAULT": "rgb(var(--color-text) / <alpha-value>)"
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
            "DEFAULT": "rgb(var(--color-text) / <alpha-value>)",
            "hover": "#fff"
          },
          "tertiary": {
            "DEFAULT": "rgb(var(--color-text) / <alpha-value>)",
            "hover": "rgb(var(--color-secondary) / <alpha-value>)"
          }
        },
        "link": {
          "DEFAULT": "rgb(var(--color-link) / <alpha-value>)",
          "main": "rgb(var(--color-secondary) / <alpha-value>)",
          "hover": "rgb(var(--color-link-hover) / <alpha-value>)",
          "secondHover": "#8BA407"
        },
        "header": {
          "serviceLink": {
            "DEFAULT": "rgb(var(--color-secondary-strong) / <alpha-value>)"
          },
          "usps": {
            "DEFAULT": "rgb(var(--color-surface-raised) / <alpha-value>)",
            "link": "rgb(var(--color-secondary) / <alpha-value>)"
          }
        },
        "menu": {
          "DEFAULT": "rgb(var(--color-text) / <alpha-value>)"
        },
        "breadcrumbs": {
          "DEFAULT": "#8A7B6C"
        },
        "form": {
          "label": {
            "DEFAULT": "rgb(var(--color-text-muted) / <alpha-value>)"
          },
          "input": {
            "DEFAULT": "rgb(var(--color-text) / <alpha-value>)",
            "placeholder": "rgb(var(--color-text-muted) / <alpha-value>)",
            "choice": {
              "glyph": {
                "DEFAULT": "#fff",
                "inactive": "rgb(var(--color-border) / <alpha-value>)"
              }
            }
          },
          "tooltip": {
            "icon": {
              "DEFAULT": "rgb(var(--color-text-muted) / <alpha-value>)",
              "hover": "rgb(var(--color-text-muted) / <alpha-value>)"
            }
          }
        },
        "blog": {
          "link": "rgb(var(--color-accent) / <alpha-value>)"
        },
        "tmx": {
          "primary": {
            "darkGreen": "rgb(var(--color-primary-dark) / <alpha-value>)",
            "green": "rgb(var(--color-text) / <alpha-value>)",
            "mediumGreen": "#002E21",
            "orange": "rgb(var(--color-accent) / <alpha-value>)",
            "lighterGreen": "rgb(var(--color-secondary) / <alpha-value>)",
            "lighterGreenSubtle": "rgb(var(--color-secondary-subtle) / <alpha-value>)",
            "lighterGreenSecond": "#8BA407",
            "lightGreen": "rgb(var(--color-secondary-strong) / <alpha-value>)",
            "blue": "#80A5E4",
            "yellow": "#FFCB00",
            "red": "#FF4D4D",
            "black": "#11171F",
            "brown": "#8A7B6C"
          },
          "secondary": {
            "sand": "rgb(var(--color-surface-raised) / <alpha-value>)",
            "beige": "rgb(var(--color-surface) / <alpha-value>)",
            "bone": "rgb(var(--color-surface-strong) / <alpha-value>)"
          },
          "neutral": {
            "grey": "rgb(var(--color-text-muted) / <alpha-value>)",
            "mediumGrey": "#878787",
            "lightGrey": "rgb(var(--color-border) / <alpha-value>)",
            "lightestGrey": "#f9fafb",
            "white": "#FFFFFF",
            "darkGrey": "#151A1F"
          },
          "status": {
            "info": {
              "subtle": "rgb(var(--color-info-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-info) / <alpha-value>)",
              "text": "rgb(var(--color-info-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-info-subtle) / <alpha-value>)"
            },
            "error": {
              "subtle": "rgb(var(--color-danger-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-danger) / <alpha-value>)",
              "text": "rgb(var(--color-danger-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-danger-subtle) / <alpha-value>)"
            },
            "success": {
              "subtle": "rgb(var(--color-success-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-success) / <alpha-value>)",
              "text": "rgb(var(--color-success-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-success-subtle) / <alpha-value>)"
            },
            "warning": {
              "subtle": "rgb(var(--color-warning-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-warning) / <alpha-value>)",
              "text": "rgb(var(--color-warning-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-warning-subtle) / <alpha-value>)"
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
          "darkGreen": "rgb(var(--color-primary-dark) / <alpha-value>)",
          "green": "rgb(var(--color-primary) / <alpha-value>)",
          "mediumGreen": "#002E21",
          "orange": "rgb(var(--color-accent) / <alpha-value>)",
          "lighterGreen": "rgb(var(--color-secondary) / <alpha-value>)",
          "lighterGreenSubtle": "rgb(var(--color-secondary-subtle) / <alpha-value>)",
          "lighterGreenSecond": "#8BA407",
          "lightGreen": "rgb(var(--color-secondary-strong) / <alpha-value>)",
          "blue": "#80A5E4",
          "yellow": "#FFCB00",
          "red": "#FF4D4D",
          "black": "#11171F",
          "brown": "#8A7B6C"
        },
        "secondary": {
          "sand": "rgb(var(--color-surface-raised) / <alpha-value>)",
          "beige": "rgb(var(--color-surface) / <alpha-value>)",
          "bone": "rgb(var(--color-surface-strong) / <alpha-value>)"
        },
        "neutral": {
          "grey": "rgb(var(--color-border-strong) / <alpha-value>)",
          "mediumGrey": "#878787",
          "lightGrey": "rgb(var(--color-border) / <alpha-value>)",
          "lightestGrey": "#f9fafb",
          "white": "#FFFFFF",
          "darkGrey": "#151A1F"
        },
        "status": {
          "info": {
            "subtle": "rgb(var(--color-info-subtle) / <alpha-value>)",
            "DEFAULT": "rgb(var(--color-info) / <alpha-value>)",
            "text": "rgb(var(--color-info-text) / <alpha-value>)",
            "strong": "rgb(var(--color-on-info-subtle) / <alpha-value>)"
          },
          "error": {
            "subtle": "rgb(var(--color-danger-subtle) / <alpha-value>)",
            "DEFAULT": "rgb(var(--color-danger) / <alpha-value>)",
            "text": "rgb(var(--color-danger-text) / <alpha-value>)",
            "strong": "rgb(var(--color-on-danger-subtle) / <alpha-value>)"
          },
          "success": {
            "subtle": "rgb(var(--color-success-subtle) / <alpha-value>)",
            "DEFAULT": "rgb(var(--color-success) / <alpha-value>)",
            "text": "rgb(var(--color-success-text) / <alpha-value>)",
            "strong": "rgb(var(--color-on-success-subtle) / <alpha-value>)"
          },
          "warning": {
            "subtle": "rgb(var(--color-warning-subtle) / <alpha-value>)",
            "DEFAULT": "rgb(var(--color-warning) / <alpha-value>)",
            "text": "rgb(var(--color-warning-text) / <alpha-value>)",
            "strong": "rgb(var(--color-on-warning-subtle) / <alpha-value>)"
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
            "DEFAULT": "rgb(var(--color-accent) / <alpha-value>)"
          }
        },
        "btn": {
          "primary": {
            "DEFAULT": "rgb(var(--color-secondary) / <alpha-value>)",
            "hover": "rgb(var(--color-secondary-strong) / <alpha-value>)"
          },
          "secondary": {
            "DEFAULT": "transparent",
            "hover": "rgb(var(--color-primary) / <alpha-value>)"
          },
          "tertiary": {
            "DEFAULT": "#fff",
            "hover": "#fff"
          }
        },
        "header": {
          "DEFAULT": "rgb(var(--color-primary) / <alpha-value>)",
          "logo": {
            "DEFAULT": "rgb(var(--color-primary) / <alpha-value>)"
          },
          "search": {
            "DEFAULT": "rgb(var(--color-primary-dark) / <alpha-value>)"
          },
          "cartCount": {
            "DEFAULT": "rgb(var(--color-accent) / <alpha-value>)"
          },
          "customerService": {
            "DEFAULT": "rgb(var(--color-primary) / <alpha-value>)"
          },
          "mobileSearch": {
            "DEFAULT": "rgb(var(--color-surface-raised) / <alpha-value>)"
          },
          "login": {
            "loggedOut": "#FF4D4D",
            "loggedIn": "rgb(var(--color-secondary-strong) / <alpha-value>)"
          }
        },
        "menu": {
          "DEFAULT": "rgb(var(--color-surface-raised) / <alpha-value>)",
          "mobile": "rgb(var(--color-surface) / <alpha-value>)",
          "activeMenuItem": "rgb(var(--color-accent) / <alpha-value>)"
        },
        "usps": {
          "DEFAULT": "rgb(var(--color-surface) / <alpha-value>)",
          "mobile": "rgb(var(--color-surface-raised) / <alpha-value>)"
        },
        "price": {
          "DEFAULT": "rgb(var(--color-accent) / <alpha-value>)"
        },
        "category": {
          "DEFAULT": "rgb(var(--color-surface) / <alpha-value>)"
        },
        "breadcrumbs": {
          "DEFAULT": "rgb(var(--color-surface) / <alpha-value>)"
        },
        "sliderDots": {
          "DEFAULT": "rgb(var(--color-border) / <alpha-value>)",
          "active": "#878787"
        },
        "pager": {
          "DEFAULT": "rgb(var(--color-secondary) / <alpha-value>)"
        },
        "amasty": {
          "tooltip": "rgb(var(--color-accent) / <alpha-value>)",
          "header": "rgb(var(--color-primary) / <alpha-value>)",
          "sliderPriceDefault": "rgb(var(--color-border) / <alpha-value>)",
          "sliderPriceActive": "rgb(var(--color-primary) / <alpha-value>)"
        },
        "blog": {
          "item": "rgb(var(--color-border) / <alpha-value>)",
          "catLink": "rgb(var(--color-primary) / <alpha-value>)"
        },
        "mirasvitSearch": {
          "suggestions": "rgb(var(--color-border) / <alpha-value>)",
          "suggestionsHover": "#8BA407"
        },
        "footer": {
          "DEFAULT": "rgb(var(--color-primary) / <alpha-value>)"
        },
        "form": {
          "input": {
            "DEFAULT": "#fff",
            "error": "#fff",
            "success": "#fff",
            "choice": {
              "DEFAULT": "#fff",
              "hover": "transparent",
              "active": "rgb(var(--color-secondary) / <alpha-value>)",
              "inactive": "#fff"
            }
          }
        },
        "container": {
          "lighter": "#ffffff",
          "DEFAULT": "#fafafa",
          "darker": "#f5f5f5",
          "beige": "rgb(var(--color-surface) / <alpha-value>)"
        },
        "tmx": {
          "primary": {
            "darkGreen": "rgb(var(--color-primary-dark) / <alpha-value>)",
            "green": "rgb(var(--color-primary) / <alpha-value>)",
            "mediumGreen": "#002E21",
            "orange": "rgb(var(--color-accent) / <alpha-value>)",
            "lighterGreen": "rgb(var(--color-secondary) / <alpha-value>)",
            "lighterGreenSubtle": "rgb(var(--color-secondary-subtle) / <alpha-value>)",
            "lighterGreenSecond": "#8BA407",
            "lightGreen": "rgb(var(--color-secondary-strong) / <alpha-value>)",
            "blue": "#80A5E4",
            "yellow": "#FFCB00",
            "red": "#FF4D4D",
            "black": "#11171F",
            "brown": "#8A7B6C"
          },
          "secondary": {
            "sand": "rgb(var(--color-surface-raised) / <alpha-value>)",
            "beige": "rgb(var(--color-surface) / <alpha-value>)",
            "bone": "rgb(var(--color-surface-strong) / <alpha-value>)"
          },
          "neutral": {
            "grey": "rgb(var(--color-border-strong) / <alpha-value>)",
            "mediumGrey": "#878787",
            "lightGrey": "rgb(var(--color-border) / <alpha-value>)",
            "lightestGrey": "#f9fafb",
            "white": "#FFFFFF",
            "darkGrey": "#151A1F"
          },
          "status": {
            "info": {
              "subtle": "rgb(var(--color-info-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-info) / <alpha-value>)",
              "text": "rgb(var(--color-info-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-info-subtle) / <alpha-value>)"
            },
            "error": {
              "subtle": "rgb(var(--color-danger-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-danger) / <alpha-value>)",
              "text": "rgb(var(--color-danger-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-danger-subtle) / <alpha-value>)"
            },
            "success": {
              "subtle": "rgb(var(--color-success-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-success) / <alpha-value>)",
              "text": "rgb(var(--color-success-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-success-subtle) / <alpha-value>)"
            },
            "warning": {
              "subtle": "rgb(var(--color-warning-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-warning) / <alpha-value>)",
              "text": "rgb(var(--color-warning-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-warning-subtle) / <alpha-value>)"
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
          "darkGreen": "rgb(var(--color-primary-dark) / <alpha-value>)",
          "green": "rgb(var(--color-primary) / <alpha-value>)",
          "mediumGreen": "#002E21",
          "orange": "rgb(var(--color-accent) / <alpha-value>)",
          "lighterGreen": "rgb(var(--color-secondary) / <alpha-value>)",
          "lighterGreenSubtle": "rgb(var(--color-secondary-subtle) / <alpha-value>)",
          "lighterGreenSecond": "#8BA407",
          "lightGreen": "rgb(var(--color-secondary-strong) / <alpha-value>)",
          "blue": "#80A5E4",
          "yellow": "#FFCB00",
          "red": "#FF4D4D",
          "black": "#11171F",
          "brown": "#8A7B6C"
        },
        "secondary": {
          "sand": "rgb(var(--color-surface-raised) / <alpha-value>)",
          "beige": "rgb(var(--color-surface) / <alpha-value>)",
          "bone": "rgb(var(--color-surface-strong) / <alpha-value>)"
        },
        "neutral": {
          "grey": "rgb(var(--color-border-strong) / <alpha-value>)",
          "mediumGrey": "#878787",
          "lightGrey": "rgb(var(--color-border) / <alpha-value>)",
          "lightestGrey": "#f9fafb",
          "white": "#FFFFFF",
          "darkGrey": "#151A1F"
        },
        "status": {
          "info": {
            "subtle": "rgb(var(--color-info-subtle) / <alpha-value>)",
            "DEFAULT": "rgb(var(--color-info) / <alpha-value>)",
            "text": "rgb(var(--color-info-text) / <alpha-value>)",
            "strong": "rgb(var(--color-on-info-subtle) / <alpha-value>)"
          },
          "error": {
            "subtle": "rgb(var(--color-danger-subtle) / <alpha-value>)",
            "DEFAULT": "rgb(var(--color-danger) / <alpha-value>)",
            "text": "rgb(var(--color-danger-text) / <alpha-value>)",
            "strong": "rgb(var(--color-on-danger-subtle) / <alpha-value>)"
          },
          "success": {
            "subtle": "rgb(var(--color-success-subtle) / <alpha-value>)",
            "DEFAULT": "rgb(var(--color-success) / <alpha-value>)",
            "text": "rgb(var(--color-success-text) / <alpha-value>)",
            "strong": "rgb(var(--color-on-success-subtle) / <alpha-value>)"
          },
          "warning": {
            "subtle": "rgb(var(--color-warning-subtle) / <alpha-value>)",
            "DEFAULT": "rgb(var(--color-warning) / <alpha-value>)",
            "text": "rgb(var(--color-warning-text) / <alpha-value>)",
            "strong": "rgb(var(--color-on-warning-subtle) / <alpha-value>)"
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
            "DEFAULT": "rgb(var(--color-secondary-strong) / <alpha-value>)",
            "hover": "rgb(var(--color-secondary-strong) / <alpha-value>)"
          },
          "secondary": {
            "DEFAULT": "rgb(var(--color-primary) / <alpha-value>)",
            "hover": "rgb(var(--color-primary) / <alpha-value>)"
          },
          "tertiary": {
            "DEFAULT": "#fff",
            "hover": "#fff"
          }
        },
        "logo": {
          "DEFAULT": "rgb(var(--color-primary-dark) / <alpha-value>)"
        },
        "usps": {
          "DEFAULT": "rgb(var(--color-surface-raised) / <alpha-value>)"
        },
        "menuMobile": {
          "DEFAULT": "rgb(var(--color-surface-strong) / <alpha-value>)"
        },
        "activeMenuItem": {
          "DEFAULT": "rgb(var(--color-accent) / <alpha-value>)"
        },
        "productTile": {
          "DEFAULT": "rgb(var(--color-border) / <alpha-value>)",
          "hover": "rgb(var(--color-primary) / <alpha-value>)"
        },
        "contentBlock": {
          "DEFAULT": "rgb(var(--color-surface-raised) / <alpha-value>)"
        },
        "currentFilters": {
          "DEFAULT": "rgb(var(--color-primary) / <alpha-value>)"
        },
        "filterCard": {
          "DEFAULT": "rgb(var(--color-border) / <alpha-value>)"
        },
        "searchAutocomplete": {
          "DEFAULT": "rgb(var(--color-border) / <alpha-value>)"
        },
        "amasty": {
          "delimiter": "rgb(var(--color-primary) / <alpha-value>)"
        },
        "form": {
          "input": {
            "DEFAULT": "rgb(var(--color-border) / <alpha-value>)",
            "hover": "rgb(var(--color-border-strong) / <alpha-value>)",
            "focus": "rgb(var(--color-border-strong) / <alpha-value>)",
            "error": "rgb(var(--color-danger) / <alpha-value>)",
            "success": "rgb(var(--color-success) / <alpha-value>)",
            "choice": {
              "DEFAULT": "rgb(var(--color-border) / <alpha-value>)",
              "hover": "rgb(var(--color-border-strong) / <alpha-value>)",
              "focus": "rgb(var(--color-border-strong) / <alpha-value>)",
              "active": "rgb(var(--color-secondary) / <alpha-value>)",
              "error": "rgb(var(--color-danger) / <alpha-value>)",
              "inactive": "rgb(var(--color-border) / <alpha-value>)"
            }
          }
        },
        "tmx": {
          "primary": {
            "darkGreen": "rgb(var(--color-primary-dark) / <alpha-value>)",
            "green": "rgb(var(--color-primary) / <alpha-value>)",
            "mediumGreen": "#002E21",
            "orange": "rgb(var(--color-accent) / <alpha-value>)",
            "lighterGreen": "rgb(var(--color-secondary) / <alpha-value>)",
            "lighterGreenSubtle": "rgb(var(--color-secondary-subtle) / <alpha-value>)",
            "lighterGreenSecond": "#8BA407",
            "lightGreen": "rgb(var(--color-secondary-strong) / <alpha-value>)",
            "blue": "#80A5E4",
            "yellow": "#FFCB00",
            "red": "#FF4D4D",
            "black": "#11171F",
            "brown": "#8A7B6C"
          },
          "secondary": {
            "sand": "rgb(var(--color-surface-raised) / <alpha-value>)",
            "beige": "rgb(var(--color-surface) / <alpha-value>)",
            "bone": "rgb(var(--color-surface-strong) / <alpha-value>)"
          },
          "neutral": {
            "grey": "rgb(var(--color-border-strong) / <alpha-value>)",
            "mediumGrey": "#878787",
            "lightGrey": "rgb(var(--color-border) / <alpha-value>)",
            "lightestGrey": "#f9fafb",
            "white": "#FFFFFF",
            "darkGrey": "#151A1F"
          },
          "status": {
            "info": {
              "subtle": "rgb(var(--color-info-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-info) / <alpha-value>)",
              "text": "rgb(var(--color-info-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-info-subtle) / <alpha-value>)"
            },
            "error": {
              "subtle": "rgb(var(--color-danger-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-danger) / <alpha-value>)",
              "text": "rgb(var(--color-danger-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-danger-subtle) / <alpha-value>)"
            },
            "success": {
              "subtle": "rgb(var(--color-success-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-success) / <alpha-value>)",
              "text": "rgb(var(--color-success-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-success-subtle) / <alpha-value>)"
            },
            "warning": {
              "subtle": "rgb(var(--color-warning-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-warning) / <alpha-value>)",
              "text": "rgb(var(--color-warning-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-warning-subtle) / <alpha-value>)"
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
            "DEFAULT": "rgb(var(--color-text-muted) / <alpha-value>)",
            "error": "rgb(var(--color-danger) / <alpha-value>)",
            "success": "rgb(var(--color-success) / <alpha-value>)",
            "choice": {
              "DEFAULT": "rgb(var(--color-text-muted) / <alpha-value>)"
            }
          }
        },
        "tmx": {
          "primary": {
            "darkGreen": "rgb(var(--color-primary-dark) / <alpha-value>)",
            "green": "rgb(var(--color-primary) / <alpha-value>)",
            "mediumGreen": "#002E21",
            "orange": "rgb(var(--color-accent) / <alpha-value>)",
            "lighterGreen": "rgb(var(--color-secondary) / <alpha-value>)",
            "lighterGreenSubtle": "rgb(var(--color-secondary-subtle) / <alpha-value>)",
            "lighterGreenSecond": "#8BA407",
            "lightGreen": "rgb(var(--color-secondary-strong) / <alpha-value>)",
            "blue": "#80A5E4",
            "yellow": "#FFCB00",
            "red": "#FF4D4D",
            "black": "#11171F",
            "brown": "#8A7B6C"
          },
          "secondary": {
            "sand": "rgb(var(--color-surface-raised) / <alpha-value>)",
            "beige": "rgb(var(--color-surface) / <alpha-value>)",
            "bone": "rgb(var(--color-surface-strong) / <alpha-value>)"
          },
          "neutral": {
            "grey": "rgb(var(--color-text-muted) / <alpha-value>)",
            "mediumGrey": "#878787",
            "lightGrey": "rgb(var(--color-border) / <alpha-value>)",
            "lightestGrey": "#f9fafb",
            "white": "#FFFFFF",
            "darkGrey": "#151A1F"
          },
          "status": {
            "info": {
              "subtle": "rgb(var(--color-info-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-info) / <alpha-value>)",
              "text": "rgb(var(--color-info-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-info-subtle) / <alpha-value>)"
            },
            "error": {
              "subtle": "rgb(var(--color-danger-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-danger) / <alpha-value>)",
              "text": "rgb(var(--color-danger-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-danger-subtle) / <alpha-value>)"
            },
            "success": {
              "subtle": "rgb(var(--color-success-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-success) / <alpha-value>)",
              "text": "rgb(var(--color-success-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-success-subtle) / <alpha-value>)"
            },
            "warning": {
              "subtle": "rgb(var(--color-warning-subtle) / <alpha-value>)",
              "DEFAULT": "rgb(var(--color-warning) / <alpha-value>)",
              "text": "rgb(var(--color-warning-text) / <alpha-value>)",
              "strong": "rgb(var(--color-on-warning-subtle) / <alpha-value>)"
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
