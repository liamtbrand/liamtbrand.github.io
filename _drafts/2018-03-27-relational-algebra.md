---
layout: post
title: "Relational Algebra: An Introduction"
categories: blog
tags: databases draft
---
Previous chapter: [SQL: Data Definition and Manipulation Language: An Introduction](/blog/2018/04/14/sql-data-definition-and-manipulation-language.html).

# Definitions

| Term | Definition |
| ---- | ---------- |
| Query Language (QL) | A *query language* is a formal language `L` such that each query `Q ∈ L` is associated with:<br>an *input-schema* `in( Q )`,<br>an *output-schema* `out( Q )`, and<br>a query mapping `q( Q ) : inst( in( Q ) ) → inst( out( Q ) )`. |
| Query Equivalence | Two queries <code>Q<sub>1</sub></code> and <code>Q<sub>2</sub></code> are **equivalent** ( <code>Q<sub>1</sub> ≡ Q<sub>2</sub></code> ), if<br>they have the same *input-schema* <code>in( Q<sub>1</sub> ) = in( Q<sub>2</sub> )</code>,<br>the same *output-schema* <code>out( Q<sub>1</sub> ) = out( Q<sub>2</sub> )</code>, and<br>the same query mapping <code>q( Q<sub>1</sub> ) = q( Q<sub>2</sub> )</code>. |
| QL Domination | Let `L` and `L'` be *query languages*.<br>`L'` **dominates** `L` ( `L ⊑ L'` ), if<br>for each query `Q ∈ L` there exists a query `Q' ∈ L'` with `Q' ≡ Q`. |
| QL Equivalence | Let `L` and `L'` be *query languages*.<br>`L'` and `L` are **equivalent** ( `L ≡ L'` ), if<br>`L ⊑ L'` and `L' ⊑ L` both hold. |
| Algebra | An *algebra* is given by a set `A` and a set of operations on `A`. |
| Relational Algebra | `A` is the set of possible *relations*. The partial operations on `A` take either 1 or 2 *relations* as input, and produce another *relation* as output. |

# Notations

| Notation | Definition |
| -------- | ---------- |
| `#r` | For a *relation* `r`, let `#r` denote the set of *attributes* over which `r` is defined. |

# Operations

| Operation | Definition |
| --------- | ---------- |
| Attribute Selection | Written <code>σ<sub>A=B</sub>( r )</code>.<br>Takes a single *relation* `r` with `A, B ∈ #r`, and produces the *relation*<br><code>σ<sub>A=B</sub>( r ) = { t | t ∈ r ∧ t( A ) = t( B ) }</code> over `#r`. |
| Constant Selection | Written <code>σ<sub>A=c</sub>( r )</code> with `c ∈ dom( A )`.<br>Takes a single *relation* `r` with `A ∈ #r`, and produces the *relation*<br><code>σ<sub>A=c</sub>( r ) = { t | t ∈ r ∧ t( A ) = c }</code> over `#r`. |
| Projection | Written <code>π<sub>A<sub>1</sub>,...,A<sub>k</sub></sub>( r )</code>.<br>Takes a single *relation* `r` with <code>A<sub>1</sub>,...,A<sub>k</sub> ∈ #r</code> as input, and produces the *relation* <code>π<sub>A<sub>1</sub>,...,A<sub>k</sub></sub>(r) = { t | ∃t' ∈ r∀i ∈ {1,...,k}t(A<sub>i</sub>) = t'(A<sub>i</sub>) }</code> over <code>{ A<sub>1</sub>, ..., A<sub>k</sub> }</code> |
| Renaming | Written <code>δ<sub>A<sub>1</sub>↦B<sub>1</sub>,...,A<sub>k</sub>↦B<sub>k</sub></sub>( r )</code> with <code>dom(A<sub>i</sub>) = dom(B<sub>i</sub>)</code> for `i = 1,...,k`.<br>Takes the *relation* `r` with <code>A<sub>1</sub>,...,A<sub>k</sub> ∈ #r</code> and<br><code>B<sub>1</sub>,...,B<sub>k</sub> ∈ #r - { A<sub>1</sub>,...,A<sub>k</sub> }</code>, and produces the *relation*<br><code>δ<sub>A<sub>1</sub>↦B<sub>1</sub>,...,A<sub>k</sub>↦B<sub>k</sub></sub>(r) = { t | ∃t' ∈ r∀i ∈ {1,...,k}t(B<sub>i</sub>) = t'(A<sub>i</sub>) ∧ ∀C ∈ #r − {A<sub>1</sub>,...,A<sub>k</sub>}t(C) = t'(C) }</code> over<br><code>( #r − { A<sub>1</sub>,...,A<sub>k</sub> } ) ∪ { B<sub>1</sub>,...,B<sub>k</sub> }</code>. |
| Union | Written `r ∪ s`.<br>Takes two *relations* `r` and `s` with `#r = #s`, and produces the *relation* that is the set union `r ∪ s` over `#r = #s`. |
| Difference | Written `r - s`.<br>Takes two *relations* `r` and `s` with `#r = #s`, and produces the *relation* that is the set difference `r - s = { t | t ∈ r ∧ t ∉ s }` over `#r = #s`. |
| Natural Join | Written `r ⋈ s`.<br>Takes two *relations* `r` and `s` as input, and produces the *relation*<br><code>r ⋈ s = {t| ∃t<sub>1</sub>∈r,t<sub>2</sub>∈s( ∀A∈#r(t(A)=t<sub>1</sub>(A)) ∧ ∀B∈#s(t(B)=t<sub>2</sub>(B)) ) }</code> over `#r = #s`. |

# Redundant Operations

| Operation | Definition |
| --------- | ---------- |
| Intersection | Written `r ∩ s`. |
| Cross Product | Written `r × s`. |
| Division | Written `r ÷ s`. |

# Defining the *Query Language* L<sub>ALG</sub> of *Relational Algebra*

For a given *database schema* `ß`
* All queries `Q` will be defined over `ß`
* `in(Q) = ß` for all queries `Q`
* `out(Q) = ans(Q)`

Notation
* Using `db` to denote an *ß-Database*
* For each `R ∈ ß`, use `db(R)` to denote the *R-Relation* in `db`

The query mapping definitions work as follows. The left hand side refers to syntactic expression of the *query language*, while the right hand side contains Relational Algebra operations from before.

| Each *relation schema* `R ∈ S` is a query in <code>L<sub>ALG</sub></code><br>- with answer schema `R`, and<br>- the query mapping defined by `q(R)(db) = db(R)`. |

| Each pair `( A : c )` with `c ∈ dom(A)` is a query in <code>L<sub>ALG</sub></code><br>- with answer schema `{A}`, and<br>- the query mapping defined by `q(A : c)(db) = {(A : c)}`. |

| For each query <code>Q ∈ L<sub>ALG</sub></code> and attributes `A,B ∈ ans(Q)` the expression <code>σ<sub>A=B</sub>(Q)</code> is also a query in <code>L<sub>ALG</sub></code><br>- with answer schema `ans(Q)`, and<br>- the query mapping defined by <code>q(σ<sub>A=B</sub>(Q))(db) = σ<sub>A=B</sub>(q(Q)(db))</code>. |

| For each query <code>Q ∈ L<sub>ALG</sub></code>, any attribute `A ∈ ans(Q)` and any constant `c ∈ dom(A)` the expression <code>σ<sub>A=c</sub>(Q)</code> is also a query in <code>L<sub>ALG</sub></code><br>- with answer schema `ans(Q)`, and<br>- the query mapping defined by <code>q(σ<sub>A=c</sub>(Q))(db) = σ<sub>A=c</sub>(q(Q)(db))</code>. |

| For each query <code>Q ∈ L<sub>ALG</sub></code> and attributes <code>A<sub>1</sub>,...,A<sub>k</sub> ∈ ans(Q)</code> the expression <code>π<sub>A<sub>1</sub>,...,A<sub>k</sub></sub>(Q)</code> is also a query in <code>L<sub>ALG</sub></code><br>- with answer schema <code>{A<sub>1</sub>,...,A<sub>k</sub>}</code>, and<br>- the query mapping defined by <code>q(π<sub>A<sub>1</sub>,...,A<sub>k</sub></sub>(Q))(db) = π<sub>A<sub>1</sub>,...,A<sub>k</sub></sub>(q(Q)(db))</code>. |

| For each query <code>Q ∈ L<sub>ALG</sub></code>, any attributes <code>A<sub>1</sub>,...,A<sub>k</sub> ∈ ans(Q)</code> and attributes <code>B<sub>1</sub>,...,B<sub>k</sub> ∉ ans(Q) − {A<sub>1</sub>,...,A<sub>k</sub>}</code> with <code>dom(A<sub>i</sub>) = dom(B<sub>i</sub>)</code> the expression <code>δ<sub>A<sub>1</sub>↦B<sub>1</sub>,...,A<sub>k</sub>↦B<sub>k</sub></sub>(Q)</code> is also a query in <code>L<sub>ALG</sub></code><br>- with answer schema <code>( ans(Q) − {A<sub>1</sub>,...,A<sub>k</sub>} ) ∪ {B<sub>1</sub>,...,B<sub>k</sub>}</code>, and<br>- the query mapping defined by<br><code>q(δ<sub>A<sub>1</sub>↦B<sub>1</sub>,...,A<sub>k</sub>↦B<sub>k</sub></sub>(Q))(db) = δ<sub>A<sub>1</sub>↦B<sub>1</sub>,...,A<sub>k</sub>↦B<sub>k</sub></sub>(q(Q)(db))</code>. |

| For any queries <code>Q<sub>1</sub>,Q<sub>2</sub> ∈ L<sub>ALG</sub></code> with <code>ans(Q<sub>1</sub>) = ans(Q<sub>2</sub>)</code> the expression <code>Q<sub>1</sub> ∪ Q<sub>2</sub></code> is also a query in <code>L<sub>ALG</sub></code><br>- with answer schema <code>ans(Q<sub>1</sub>)</code>, and<br>- the query mapping defined by <code>q(Q<sub>1</sub> ∪ Q<sub>2</sub>)(db) = q(Q<sub>1</sub>)(db) ∪ q(Q<sub>2</sub>)(db)</code>. |

| For any queries <code>Q<sub>1</sub>,Q<sub>2</sub> ∈ L<sub>ALG</sub></code> with <code>ans(Q<sub>1</sub>) = ans(Q<sub>2</sub>)</code> the expression <code>Q<sub>1</sub> − Q<sub>2</sub></code> is also a query in <code>L<sub>ALG</sub></code><br>- with answer schema <code>ans(Q<sub>1</sub>)</code>, and<br>- the query mapping defined by <code>q(Q<sub>1</sub> − Q<sub>2</sub>)(db) = q(Q<sub>1</sub>)(db) − q(Q<sub>2</sub>)(db)</code>. |

| For any queries <code>Q<sub>1</sub>,Q<sub>2</sub> ∈ L<sub>ALG</sub></code> the expression <code>Q<sub>1</sub> ⋈ Q<sub>2</sub></code> is also a query in <code>L<sub>ALG</sub></code><br>- with answer schema <code>ans(Q<sub>1</sub>) ∪ ans(Q<sub>2</sub>)</code>, and<br>- the query mapping defined by <code>q(Q<sub>1</sub> ⋈ Q<sub>2</sub>)(db) = q(Q<sub>1</sub>)(db) ⋈ q(Q<sub>2</sub>)(db)</code>. |

# Example

We define the following Relation Schema:

DRINK = {name,cost} with key {name}.

Find the names of all drinks with cost ≤ 5.

Q = π<sub>name</sub>( σ<sub>cost≤5</sub>( DRINK ) )

Next chapter: [Relational Calculus: An Introduction](/blog/2018/03/27/relational-calculus.html).
