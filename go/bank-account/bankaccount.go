package account

import (
	"sync"
)

// Account represents a bank account.
type Account struct {
	balance int
	closed  bool
	mux     sync.Mutex
}

// Open creates an account with the deposit amount.
func Open(amount int) (a *Account) {
	if amount < 0 {
		return nil
	}
	a = new(Account)
	a.balance = amount
	return
}

// Balance returns the balance of the account.
func (a *Account) Balance() (balance int, ok bool) {
	a.mux.Lock()
	if !a.closed {
		balance = a.balance
		ok = true
	}
	a.mux.Unlock()
	return
}

// Deposit adds the specified amount to the balance.
func (a *Account) Deposit(amount int) (balance int, ok bool) {
	a.mux.Lock()
	if !a.closed {
		balance = a.balance + amount
		if balance >= 0 {
			a.balance = balance
			ok = true
		} else {
			balance = a.balance
		}
	}
	a.mux.Unlock()
	return
}

// Close closes the account and pays out the balance.
func (a *Account) Close() (payout int, ok bool) {
	a.mux.Lock()
	if !a.closed {
		payout = a.balance
		a.closed = true
		ok = true
	}
	a.mux.Unlock()
	return
}
