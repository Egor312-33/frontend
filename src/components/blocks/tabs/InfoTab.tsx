export function InfoTab() {
	return (
		<div className='grid gap-6 lg:grid-cols-2'>
			<div className='border-border bg-card flex flex-col gap-3 rounded-xl border p-6'>
				<h2 className='text-lg font-bold'>О стримере</h2>

				<p className='text-muted-foreground text-sm leading-6'>
					Информация о стримере пока не заполнена. Здесь будет биография, ключевые факты и история.
				</p>
			</div>

			<div className='border-border bg-card flex flex-col gap-3 rounded-xl border p-6'>
				<h2 className='text-lg font-bold'>Детали</h2>

				<ul className='text-muted-foreground space-y-2 text-sm'>
					<li className='flex justify-between'>
						<span>Первый эфир</span>
						<span className='text-foreground font-medium'>—</span>
					</li>
					<li className='flex justify-between'>
						<span>Всего эфиров</span>
						<span className='text-foreground font-medium'>—</span>
					</li>
					<li className='flex justify-between'>
						<span>Платформа</span>
						<span className='text-foreground font-medium'>—</span>
					</li>
				</ul>
			</div>
		</div>
	)
}
