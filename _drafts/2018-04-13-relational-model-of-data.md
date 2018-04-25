---
layout: post
title: "The Relational Model of Data: An Introduction"
categories: blog
tags: databases relational draft
---
Previous chapter: [Database Systems: An Introduction](/blog/2018/04/13/database-systems.html).

# The Relational Model of Data

In the context of the Relational Model of Data, we define the following.

| Term | Definition |
| ---- | ---------- |
| [Tuple](https://en.wikipedia.org/wiki/Tuple) | A finite, ordered list of elements. Elements of a *tuple* capture some property of a real-world object. These properties are called *attributes*. |
| [Relation](https://en.wikipedia.org/wiki/Relation_(database)) | A set of *tuples*. All *tuples* in a *relation* have the same structure. |
| Attribute | A property of a real-world object. Often denoted <code>A<sub>n</sub></code>. Every *attribute* has an associated *domain*. |
| [Domain](https://en.wikipedia.org/wiki/Data_domain) | The set containing all possible values of an *attribute* `A`. Written `dom( A )`. |
| Relation Schema | A finite set, usually denoted `R`. The elements of `R` are called *attributes*. Each *attribute* `A ∈ R` is associated with a *domain* `dom( A )`. A *relation schema* provides an abstract description of the *tuples* in a *relation*. |
| R-Tuple | An element of the [cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) of the *domains* of the *attributes* of the *relation schema* `R`. Let <code>R = { A<sub>1</sub>, ..., A<sub>n</sub> }</code> be a *relation schema*, then<br>an *R-Tuple* is an element `t` of the [cartesian product](https://en.wikipedia.org/wiki/Cartesian_product)<br><code>dom( A<sub>1</sub> ) × ... × dom( A<sub>n</sub> )</code>. |
| R-Relation | An *R-Relation* is a finite set `r` of *R-Tuples*, that is, a finite *relation*<br><code>r ⊆ dom( A<sub>1</sub> ) × ... × dom( A<sub>n</sub> )</code>. |
| Database Schema | A finite set `ß` of *relation schemata*. |
| Relational Database (ß-Database) | Let `ß` be a *database schema*. An ß-Database, usually denoted by `I`, consists of just one *R-Relation* `I( R )` for each *relation schema* `R` in `ß`, that is,<br>`I = { I( R ) | R ∈ ß }`. |
| SuperKey | A *superkey* over a *relation schema* `R` is a finite subset `K ⊆ R` of `R`.<br>An R-Relation `r` is said to **satisfy** the *superkey* `K` over `R` if every pair of distinct *tuples* <code>t<sub>1</sub>, t<sub>2</sub> ∈ r</code> deviates on at least one *attribute* of `K`, that is,<br><code>t<sub>1</sub>( A ) ≠ t<sub>2</sub>( A )</code> for some `A ∈ K`. |
| Key | A *superkey* `K` over `R` is a *key* if there is no other *superkey* `K'` over `R` that is a proper subset of `K`, that is, `K' ⊂ K`. |
| Foreign Key | A *foreign key* over a *relation schema* `R` in a *database schema* `ß` is<br>a sequence of *attributes* <code>A<sub>1</sub>, ..., A<sub>n</sub> ∈ R</code> together with<br>a *key* <code>K = { B<sub>1</sub>, ..., B<sub>n</sub> }</code> on some *relation schema* `S ∈ ß`<br>where <code>dom( A<sub>i</sub> ) = dom( B<sub>i</sub> )</code> for `i = 1, ..., n`.<br>This is usually denoted by <code>[ A<sub>1</sub>, ..., A<sub>n</sub> ] ⊆ S[ B<sub>1</sub>, ..., B<sub>n</sub> ]</code>.<br>The *foreign key* <code>[ A<sub>1</sub>, ..., A<sub>n</sub> ] ⊆ S[ B<sub>1</sub>, ..., B<sub>n</sub> ]</code> over `R` is said to be **satisfied** by the database instance `I` of `ß` if<br>for each *tuple* `t ∈ I( R )` there is a *tuple* `s ∈ I( S )` such that<br><code>t( A<sub>i</sub> ) = s( B<sub>i</sub> )</code> for all `i = 1, ..., n`.  |

# Table Representation / Illustration

Each table represents a *relation*. Column Headers represent *attributes*. Rows in the table represent *tuples* in the relation.

# Declarations and Writing Conventions

A *relation schema* is declared as: `RELATION = { attributes }`<br>
For example, the table above can be said to use the *relation schema*:<br>`DEFINITION = { term, definition }`

To emphasize sequence of *attributes*, write: `R( A[1], ..., A[n] )`

To emphasize *domains*, write: `R( A[1] : dom( A[1] ), ..., A[n] : dom( A[n] ) )`

When writing tuples, and their values:

To emphasize *attributes*, write: `t = ( A[1] : v[1], ..., A[n] : v[n] )`

Syntactic level: *Attributes*, *relation schemata*, *database schemata*.<br>
Semantic level: *Domains*, *tuples*, *relations*, *databases*.

# Things to Note

In literature the definition of *key* is sometimes referred to as *minimal key* or *candidate key*.

The definition of *superkey* is sometimes referred to as *key*.

Next chapter: [SQL: Data Definition and Manipulation Language: An Introduction](/blog/2018/04/14/sql-data-definition-and-manipulation-language.html).
