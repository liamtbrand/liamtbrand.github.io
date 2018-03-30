---
layout: post
title: "Relational Calculus: An Introduction"
date: 2018-03-27 15:44:00 +1300
categories: blog
tags: databases draft
---

Relational Calculus uses First Order Logic to define operations.

# Operators

| Operator | Symbol | Definition | Example Format |
| -------- | ------ | ---------- | ------- |
| Existential | ∃ | There exists an x that makes φ true. | ∃x( φ ) |
| Universal | ∀ | For all x, φ is made true. | ∀x( φ ) |
| Disjunction | ∨ | Natural, φ OR ψ | φ ∨ ψ |
| Conjunction | ∧ | φ AND ψ | φ ∧ ψ |
| Negation | ¬ | NOT φ | ¬φ |

# Domain Relational Calculus Queries

A query in Domain Relational Calculus is formatted as follows.

Q = { (attributes) \| proposition }.

The result is a set of tuples with values for the specified attributes, such that the values of the tuples make the proposition true.

# Examples

With Relation Schemas:<br>
BOOK = {isbn,title,author,year} with key {isbn}.<br>
PUBLISHER = {pid,name} with key {pid}.<br>
PUBLISHED = {pid,isbn} with key {pid,isbn}.

Select the titles of all books published in 2018.<br>
Q = { (x<sub>title</sub>) \| ∃x<sub>isbn</sub>,x<sub>author</sub>( BOOK( x<sub>isbn</sub>, x<sub>title</sub>, x<sub>author</sub>, '2018' ) ) }

Select the titles of all books written by Jo Nesbø.<br>
Q = { (x<sub>title</sub>) \| ∃x<sub>isbn</sub>,x<sub>year</sub>( BOOK( x<sub>isbn</sub>, x<sub>title</sub>, 'Jo Nesbø', x<sub>year</sub> ) ) }

Select the name of the publisher that published the book 'Der Fledermausmann' by 'Jo Nesbø'.<br>
Q = { (x<sub>name</sub>) \| ∃x<sub>pid</sub>(<br>
&nbsp;&nbsp;PUBLISHER( x<sub>pid</sub>, x<sub>name</sub> ) ∧<br>
&nbsp;&nbsp;∃x<sub>isbn</sub>(<br>
&nbsp;&nbsp;&nbsp;&nbsp;PUBLISHED( x<sub>pid</sub>, x<sub>isbn</sub> ) ∧<br>
&nbsp;&nbsp;&nbsp;&nbsp;∃x<sub>year</sub>( BOOK( x<sub>isbn</sub>, 'Der Fledermausmann', 'Jo Nesbø', x<sub>year</sub> ) )<br>
&nbsp;&nbsp;)<br>
) }
