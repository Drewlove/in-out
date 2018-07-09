export function formatPrice(amount) {
	const priceAmount = amount.toFixed(2); 
	return `$${amount.toFixed(2)}`
}