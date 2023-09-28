---
layout: ../../layout/md_layout.astro
title: Logarithm
---

# Logarithm

## 1. Definition
Logarithms or logs are a part of mathematics. They are related to exponential functions. A logarithm tells what exponent (or power) is needed to make a certain number, so logarithms are the inverse (opposite) of exponentiation. Historically, they were useful in multiplying or dividing large numbers.

_Ex_
> $a^x = y \to \log_{a}{y} = x$
> $2^6 = 64 \to \log_{2}{64} = 6$
> $10^4 = 10000 \to \log_{10}{10000} = 4$

## 2. Properties
1. $\log_{a}a = 1$

2. $\log_{a}b = \frac{1}{\log_{b}a} = \frac{\log_{p}b}{\log_{p}ba}$

3. $\log_{a}(bd) = \log_{a}b + \log_{a}d$

4. $\log_{a}(\frac{b}{d}) = \log_{a}b - \log_{a}d$

5. $\log_{a^m}b^n = (\frac{n}{m})(\log_{a}b)$

6. $\log_{a}b. \log_{b}c. \log_{c}d. = \log_{a}d$

7. $(a)^{\log_{a}b} = b$

## 3. Equality
1. $\log_{a}{f(x)} = \log_{a}m \to f(x) = m$

2. $\log_{a}{f(x)} = \log_{a}{g(x)} \to f(x) = g(x)$

3. $\log_{a}{f(x)} = \log_{b}{f(x)} \Rightarrow f(x) = 1$

6. $\log_{f(x)}{g(x)} = \log_{f(x)}{h(x)} \begin{cases}f(x)>0;g(x)>0; \\ 
				        h(x)>0; f(x) \neq 1; \\ 
					g(x) = h(x) \end{cases}$

## 4. Inequality
### 1. if $a > 1$
  | Form  | Completion    |
  |:--------------- | :--------------- |
  | $\log_{a}{f(x)} \ge \log_{a}{g(x)}$   | $f(x) \ge g(x)$   |
  | $\log_{a}{f(x)} \le \log_{a}{g(x)}$   | $f(x) \le g(x)$   |
  | $\log_{a}{f(x)} \ge b$   | $f(x) \ge a^b$   |
  
### 2. if $0 < a < 1$
  | Form  | Completion    |
  |:--------------- | :--------------- |
  | $\log_{a}{f(x)} \ge \log_{a}{g(x)}$   | $f(x) \le g(x)$   |
  | $\log_{a}{f(x)} \le \log_{a}{g(x)}$   | $f(x) \ge g(x)$   |
  | $\log_{a}{f(x)} \ge b$   | $f(x) \le a^b$   |
