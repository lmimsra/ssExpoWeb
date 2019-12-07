<template>
  <div>
    <h1>Notificationコンポーネント</h1>
  </div>
</template>

<script>
/* 通知の処理書いてみないとわかんないので保留 */
export default {
  name: 'Notification',
  data: () => {
    return {
      notifications: [
        {
          id: 111,
          user: 'test1',
          userId: '12345667',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-09-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テストな投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss" />
