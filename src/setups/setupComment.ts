import type { Univer } from '@univerjs/core'
import { UniverThreadCommentPlugin } from '@univerjs/thread-comment'
import { UniverSheetsThreadCommentBasePlugin } from '@univerjs/sheets-thread-comment-base'
import { UniverSheetsThreadCommentPlugin } from '@univerjs/sheets-thread-comment'
import { IThreadCommentMentionDataService, UniverThreadCommentUIPlugin } from '@univerjs/thread-comment-ui'

export function setupComment(univer: Univer) {
  const defaultIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBtZU9TxtBEIbfWRzFSIdkikhBSqRQkJqkCKTCFkqVInSUSaT0wC8w/gXxD4gU2nRJkXQWhAZowDUUWKIwEgWWbEEB3mVmx3dn4DA2nB/ppNuPeWd29mMIPXDr+RxwtgRHeW6+guNPRxogqnL7Dwz9psJ27S4NShaeZTH3kwXy6I81dlRKcmRui88swdq9AcSFL7Buz1Vmlns64MiLsCjzwnIYHLH57tbfFbs7KRaXyEU8FVZofqccOfA5l7Q8LPIkGrwnb2RPNEXWFVMUF3L+kDCk0btDDAMzOm5YfAHDwp4tG74wnzAsiOYMnJ3GoDybA7IT98/jm5+JNnfiIzAS6LlqHQBN/i6b2t/cV1Hh6BfwYlHnHP4AXi5q/8kmMMpOs8+BixZw/Fd6xUEHEbnkgclvQP2fGp7uShRKnQ3G32rkjV1th8JhIGG7tR/JyjGteSOZELwGMmNqIIigRCLRh2OZIE6BjItdd7pCW6Uhm1zzkUtungSxwEUzNpQ+GQumtH1ej1MqgmNT6vwmhCq5yuwq56EYTbgeQUz3yvrpV1b4ok3nYJ+eYhgYmjRUqErx2EDq0Fr8FhG++iqVGqxlUJI/70Ar0UgJaWHj6hYVHJrfKssAHot1JfqwE9WVWzXZVd5z2Ws/4PnmtEjkXeKJDvxUecLbWOXH/DP6QQ4J72NS0adedp1aseBfXP8odlZFfPvBF7SN/8hky1TYuPOAXAEipMx15u5ToAAAAABJRU5ErkJggg=='

  // Custom mention data service
  class CustomMentionDataService implements IThreadCommentMentionDataService {
    trigger = '@'
    async getMentions() {
      return [
        {
          id: '1',
          label: 'User1',
          type: 'user',
          icon: defaultIcon,
        },
        {
          id: '2',
          label: 'User2',
          type: 'user',
          icon: defaultIcon,
        },
      ]
    }
  }

  univer.registerPlugin(UniverThreadCommentPlugin)
  univer.registerPlugin(UniverSheetsThreadCommentBasePlugin)
  univer.registerPlugin(UniverThreadCommentUIPlugin, {
    overrides: [[IThreadCommentMentionDataService, { useClass: CustomMentionDataService }]],
  })
  univer.registerPlugin(UniverSheetsThreadCommentPlugin)
}
