---
layout: post
title: "Relational Calculus: An Introduction (DRAFT)"
date: 2018-03-27 15:44:00 +1300
tags: databases
---

Relational Calculus uses first order logic to define operations.

# Operators

| Operator | Symbol | Definition | Example |
| -------- | ------ | ---------- | ------- |
| Existential | ∃ | | ∃x<sub>title</sub>,x<sub>author</sub>( BOOK(x<sub>title</sub>,x<sub>author</sub>,'2018') ) |
| Universal | ∀ | | ∀x(φ) |
| Disjunction | ∨ | | φ ∨ ψ |
| Conjunction | ∧ | | φ ∧ ψ |

# Example

With Relation Schema: BOOK = {title,author,year} with key {title,author}.<br>
Select all books written in 2018.

Q = { (x<sub>name</sub>) \| ∃x<sub>title</sub>,x<sub>author</sub>( BOOK(x<sub>title</sub>,x<sub>author</sub>,'2018') ) }
