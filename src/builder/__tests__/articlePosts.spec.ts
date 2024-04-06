import { parseRSSFeed }  from "../articlePosts"

describe("articleposts",()=>{
    describe("parseRSSfeed",()=>{
        test("feedのrssをパースする",async ()=>{
            const results = await parseRSSFeed("https://qiita.com/PoPodada/feed")
            expect(results).toEqual([{
                title: "ハッカソンに参加する良さについて",
                url: "https://qiita.com/PoPodada/items/30bdf57e1d3ea7bc070b",
                publishedAt: "2024-03-15T13:16:16.000Z",
            }])
        })
    })
})