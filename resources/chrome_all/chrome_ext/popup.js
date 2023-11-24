{
    "manifest_version": 3,
    "name": "Tab Monitor Extension",
    "version": "1.0",
    "description": "Monitors and sends tab info to a local server.",
    "permissions": ["activeTab", "webNavigation"],
    "background": {
      "service_worker": "background.js"
    },
    "action": {
      "default_popup": "popup.html",
      "default_icon": {
        "16": "images/icon16.png",
        "48": "images/icon48.png",
        "128": "images/icon128.png"
      }
    },
    "content_scripts": [
      {
        "matches": ["<all_urls>"],
        "js": ["content.js"]
      }
    ],
    "icons": {
      "16": "images/icon16.png",
      "48": "images/icon48.png",
      "128": "images/icon128.png"
    }
  }
  