// To execute Go code, please declare a func main() in a package "main"

package main

import (
	"fmt"
	"strings"
)

func main() {
	var s = []string{"r", "e", "s", "t"}
	var res string
	/* inefficient
	for _, val := range s {
		res += val
	}
	*/
	// string builder
	var stringBuilder strings.Builder
	for _, val := range s {
		stringBuilder.WriteString(val + " - ")
		// internally {0xc00003e6d0 [114 32 45 32 101 32 45 32 115 32 45 32 116 32 45 32]}
	}
	res = stringBuilder.String()
	fmt.Println(s, res, stringBuilder)

}

/*
> Statically typed, Strongly typed(X (can't add) int + string)
> Go is compiled: source code to a machine code(creates a binary code)
> go mod init module_name
> nvim go.mod => file consists of module_names and go version

Build(compiles) + run
> go build cmd/module_name/go_file.go => compiles
> ./executable_file => runs

Run directly
> go run cmd/module_name/go_file.g0 => compiles + run

Constants, variables
> const(declare + initialize; can't change values), var keywords

Builtin Data types
> int: int, int16(32767), int32, int64;
> bool;
> float32, float64;
> rune
> string
> uint, uint8, uint16, uint32, uint64(only +ves but with 2 x size)

can't perform Arthematic ops with mix types: int + flaot X
type cast is possible: floatnum + float32(intnum)

strings:
'', `multiple lines`, "s1" + " " + "s2"
len() => # of bytes, because of UTF-8
import "unicode/utf8"
utf8.RuneCountInString()
> rune is a dt that represents characters

var myRune rune = 'a'

ftm.Println(myRune) ==> 97

Default Values:
int, float, rune, uint => 0
bool => false
string => ''
error, map => nil

if/else; switch case with & without condition; no break statement is used explicitly.

Arrays: fixed length - same type - indexed - contiguous
	initilaizing
		> var myArr [3]int32 = [3]int32{1,2,3}
		> myArr := [3]int32{1,2,3}
		> myArr := [...]int32{1,2,3} => initialized with 3 ele but of
		variable size
		> var myArr []int32 = []int32{4,5,6}

	Array methods:
		> myArr = append(myArr, val)
		> len(), cap()
		> myArr = append(myArr, oldArr...); append multiple values using
		...(spread operator).
		> var myArr []int32 = make([]int32, 3, 9)
	Maps:
		> var myMap map[string]uint8 = make(map[string]int8)
		> var value, ok = myMap['key]
		> delete(myMap, 'key')

	loops:
		> for i:=0; i < 12; i++ { }
		> for i, ok := range myArr/myMap {}
		> while:
			for i < 10 { }
			always true case: for {}
	strings:
	  > string indices returns ascii values, which actually indexes the underlying byte array
  	> rune is the unicode point numbers
  	> runes are the alias for int32
  	> strings are immutable, cant modify once created
  	> concatenating with '+' is completly inefficient, use strings.Builder
*/
