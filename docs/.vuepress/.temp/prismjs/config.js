import "/Users/dingmiao/Desktop/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/Users/dingmiao/Desktop/vuepress-starter/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/Users/dingmiao/Desktop/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/Users/dingmiao/Desktop/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/Users/dingmiao/Desktop/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
