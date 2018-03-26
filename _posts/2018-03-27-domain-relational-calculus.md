---
layout: post
title: "Domain Relational Calculus"
date: 2018-03-27 00:00:20 +1300
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
