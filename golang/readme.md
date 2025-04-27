### Question 1

Create a function that counts the word frequency in this string "Four, One two two three Three three four  four   four".  Case insensitive, ignore punctuation.

Answer:

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	text := "Four, One two two three Three three four  four   four"

	splitText := strings.Split(text, " ")

	newText := []string{}
    
	for _, word := range splitText {
		if word != "" {
			newText = append(newText, strings.ToLower(word))
		}
	}

	counting := make(map[string]int)
	for _, word := range newText {
		counting[word]++
	}

	fmt.Println(newText)
	fmt.Println(counting)
}
```