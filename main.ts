import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';


export default class WebLink extends Plugin {
	async onload() {
		this.addCommand({
			id: 'open-blog',
			name: 'Open Blog',
			callback: () => {
			  const activeFile = this.app.workspace.getActiveFile();
			  if (activeFile) {
				const modal = new Modal(this.app);
				let link = `https://gokulnk.com/notes/${activeFile.path}`;
				link = link.replace(/\s+/g, '-')
				link = link.replace(/.md/g, '')
				const content = `<a target="_blank" href="${link}" class="external-link">${link}</a> `;
				window.open(link, '_blank');
			  } else {
				new Notice('No active file');
			  }
			}
		  });
	}
	onunload() {

	}
}

