### Question 1:

Make a javascript or typescript function that converts any string to Title Case.

#### Answer:

```typescript
const titleCase = (text: string) => {
    let splitText = text.toLowerCase().split(' ');
    for (var i = 0; i < splitText.length; i++) {
        splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1);
    }
    return splitText.join(' ');
}
console.log(titleCase("I'm a little tea pot"))
console.log(titleCase("sHoRt AnD sToUt"))
console.log(titleCase("SHORT AND STOUT"))
```

#### Result:

<img src="Screenshot 2025-04-26 at 16.17.45.png" alt="level-2" width="400"/>

--

### Question 2:

Create a function that counts the word frequency in this string "Four One two two three Three three four  four   four".  Case insensitive, ignore punctuation.

#### Answer:

```typescript
const wordFreq = (text: string) => {
    const split = text.toLocaleLowerCase().split(' ').filter((e: string) => e);
    let count: any = {}
    split.forEach((e) => {
        count[e] = (count[e] || 0) + 1;
    })

    return Object.entries(count).map(([e, key] ) => {
        return  `${key} => ${e}`;
    })
}
console.log(wordFreq("Four One two two three Three three four  four   four"))
```

#### Result:

<img src="Screenshot 2025-04-26 at 16.18.04.png" alt="level-2" width="400"/>

### Question 3:

Fix this code, using promises:

#### Answer:

```typescript
function delay(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

delay(3000).then(() => alert('runs after 3 seconds'));
```

#### Result:

<img src="Screenshot 2025-04-26 at 16.18.04.png" alt="level-2" width="400"/>

### Question 4:

Level 2.5: Rewrite using Async/Await:

#### Answer:

```typescript
const fetchData = async (url: string) => {
    if (!url) return { success: false, data: "URL is reqired" };
    return { success: true, data: `Data from ${url}` }
}

const processData = async (data: string) => {
    if (!data) return { success: false, data: "Data is required" }
    return { success: true, data: data.toUpperCase() }
}

const result = async (url: string) => {
    const fetch = await fetchData(url)
    if (!fetch.success) return console.error(fetch.data)

    const data = await processData(fetch.data)
    if (!data.success) return console.error(data.data)

    return console.log("Processed Data:", data.data)
}

result('https://example.com')
```

#### Result

<img src="Screenshot 2025-04-26 at 16.42.30.png" alt="level-2" width="400"/>