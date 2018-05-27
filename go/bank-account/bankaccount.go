package account

import (
	"sync"
)

// Account represents a bank account.
type Account struct {
	bal int
	mux sync.Mutex
}

// Open a bank account.
func Open(amt int) *Account {
	if amt < 0 {
		return nil
	}
	a := new(Account)
	a.bal = amt
	return a
}

// Balance returns the balance of the account.
func (a *Account) Balance() (bal int, ok bool) {
	a.mux.Lock()
	bal = a.bal
	if bal > 0 {
		ok = true
	}
	a.mux.Unlock()
	return bal, ok
}

// Deposit adds the specified amount to the balance.
func (a *Account) Deposit(amt int) (bal int, ok bool) {
	a.mux.Lock()
	if a.bal > 0 {
		a.bal += amt
	}
	bal = a.bal
	if bal > 0 {
		ok = true
	}
	a.mux.Unlock()
	return bal, ok
}

// Close closes the account and pays out the balance.
func (a *Account) Close() (pay int, ok bool) {
	a.mux.Lock()
	pay = a.bal
	a.bal = 0
	a.mux.Unlock()
	return pay, true
}
