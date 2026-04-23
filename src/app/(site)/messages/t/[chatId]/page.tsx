import { SystemChat } from "@/components/messages/systemChat"

export default async function ChatPage(props: {
	params: Promise<{ chatId: string }>
}) {
	const { chatId } = await props.params
 
	return (
		<div className='bg-background flex h-screen flex-col'>
			<SystemChat chatId={chatId} />
		</div>
	)
}
 