---
layout: post
title: "Relational Algebra: An Introduction (DRAFT)"
date: 2018-03-27 00:20:00 +1300
tags: databases
---
# Operator table

| Operator | Symbol | Definition | Example |
| -------- | ------ | ---------- | ------- |
| Select   | σ | Selects tuples in the relation, where x=y. (Select rows) | σ<sub>x=y</sub>(φ) |
| Project  | π | Projects the relation down to the specified attributes. (Select columns) | π<sub>x</sub>(φ) |
| Rename | ρ | Renames the specified attributes. (Rename columns) | ρ<sub>x↦x'</sub>(φ) |
| Natural Join | ⋈ | Joins two relations. (Join tables) | φ ⋈ ψ |
| Set Difference | - | Removes tuples from the set. (Eliminate rows) | φ - ψ |
| Union | ∪ | Takes the union of the relations. | φ ∪ ψ |
| Division | ÷ | | φ ÷ ψ |

# Definitions

q( σ<sub>A=B</sub>( Q ) )( db ) = σ<sub>A=B</sub>( q( Q )( db ) )

# Example

We define the following Relation Schema:

DRINK = {name,cost} with key {name}.

Find the names of all drinks with cost ≤ 5.

Q = π<sub>name</sub>( σ<sub>cost≤5</sub>( DRINK ) )
