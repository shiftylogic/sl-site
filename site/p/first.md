# Subtitle

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor neque, ullamcorper commodo ornare ut, luctus a nisi. In hac habitasse platea dictumst. Suspendisse at felis et risus fermentum volutpat. In sed sapien nec tortor lobortis euismod quis ut ante. ~~Cras mattis, nunc id viverra facilisis, purus~~ quam gravida massa, vitae convallis tellus felis vel mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin imperdiet urna euismod, aliquet risus vel, tempor diam. Fusce suscipit est diam, vitae sagittis ipsum hendrerit eget. Nullam finibus ipsum vitae tellus ullamcorper ultrices eu sed nulla. Proin velit massa, efficitur sit amet sapien a, vulputate pulvinar felis. Sed sodales dictum erat, elementum condimentum nibh convallis id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.

## Fun with lists

- [x] This is a checked item
- [ ] This is an unchecked item

*This is a numbered list*
1. First thing
2. Second thing
3. Third thing
4. Fourth thing

__This is an unordered list__
* item
* this
* that
* those

**Another unordered list**
- one
- two
- three
- four
- five

_Nested lists_
* First in level 1
  * First in First in level 2
    * First in First in First in level 3
  * Second in First in level 2
    - Fiest in Second in First in level 3
  * Third in First in level 2
* Second in level 1
  - First in Second in level 2
  - Second in Second in level 2
* Third in level 1

Aenean sit amet viverra urna. Nulla facilisi. Mauris a commodo purus. Sed sit amet lacus ut sem dictum hendrerit sed vitae nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas cursus magna eu felis aliquam, venenatis euismod neque finibus. Pellentesque fringilla tincidunt ornare. Fusce tempor diam lacus, vel ornare libero _molestie_ ut. Proin semper tincidunt sagittis. Quisque tristique magna ac pellentesque faucibus.

*Some quoted text*
> This is a blocked quote.
> There should be at least 3 lines.
> This is the last line.

### Table Example
| Column 1      | Column 2     | Column 3  |
| :------------ | :----------: | --------: |
| Cell Contents | More Stuff   | And Again |
| You Can Also  | Put Pipes In | Like this |
| You Can Also  | Put Pipes In | Like this |
| You Can Also  | Put Pipes In | Like this |
| You Can Also  | Put Pipes In | Like this |

### Code Example
```go
package main

import (
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./www/site")))
	http.ListenAndServe(":8333", nil)
}
```

## Section 2

Nullam ut orci metus. Sed non neque sagittis, maximus quam non, accumsan arcu. Duis vulputate feugiat orci sed interdum. Vivamus ut augue sagittis, aliquam leo placerat, fermentum urna. Cras commodo nibh nec quam condimentum interdum. Integer rutrum quis nisi et vehicula. Morbi vulputate nulla enim, sed tristique ante tincidunt at. Nunc facilisis turpis quis dolor gravida finibus. Duis consectetur imperdiet ante sed egestas. Nunc condimentum urna id nulla bibendum consectetur. Morbi semper non ligula et **consequat**. Sed quis nisl eu risus imperdiet egestas a at ex.

## And more...

Etiam euismod vel tellus nec faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent at tortor semper, condimentum tortor a, ultrices lorem. Maecenas lacinia neque nec nunc eleifend iaculis. Vivamus porttitor lorem posuere, elementum urna eu, viverra lorem. Vivamus pharetra nunc ut nisi pulvinar efficitur vitae in nulla. Cras ultricies massa sit amet mauris tempus scelerisque. Aliquam erat volutpat. Praesent sollicitudin lectus ut vestibulum placerat. Nunc auctor dictum nunc at viverra. Donec at libero eget lacus tincidunt pharetra. Nam iaculis nec magna et placerat. Maecenas ut tristique erat, sit amet bibendum tortor. Morbi lorem risus, porttitor nec egestas id, dignissim eget tellus.

Duis eu augue sed lectus pretium efficitur. Integer id risus viverra nulla venenatis aliquet eu laoreet lorem. Aenean viverra fermentum efficitur. Maecenas consectetur pulvinar velit, eget sollicitudin lectus vehicula ut. In elit dui, congue a nunc volutpat, varius rutrum tortor. Maecenas ornare euismod tellus et scelerisque. Aliquam nibh urna, gravida et lectus id, suscipit congue enim. Etiam at orci scelerisque, aliquam magna eu, vestibulum sem. Vivamus laoreet consequat felis, et convallis magna ultricies a.

## Embedded HTML?

<div class="container">
  <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" type="text" placeholder="Text input">
    </div>
  </div>
  
  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-success" type="text" placeholder="Text input" value="bulma">
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
    <p class="help is-success">This username is available</p>
  </div>
  
  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
      <span class="icon is-small is-left">
        <i data-feather="mail" stroke-width="1"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
    <p class="help is-danger">This email is invalid</p>
  </div>
  
  <div class="field">
    <label class="label">Subject</label>
    <div class="control">
      <div class="select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div>
  
  <div class="field">
    <label class="label">Message</label>
    <div class="control">
      <textarea class="textarea" placeholder="Textarea"></textarea>
    </div>
  </div>
  
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input type="checkbox">
        I agree to the <a href="#">terms and conditions</a>
      </label>
    </div>
  </div>
  
  <div class="field">
    <div class="control">
      <label class="radio">
        <input type="radio" name="question">
        Yes
      </label>
      <label class="radio">
        <input type="radio" name="question">
        No
      </label>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
</div>
