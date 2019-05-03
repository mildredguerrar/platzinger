import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friends: User[];
  friendId: any;
  friend: User;
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.friendId = this.activatedRoute.snapshot.params['uid'];
    this.friends = this.userService.getFriends();
    this.friend = this.friends.find( (record) => {
      return record.uid == this.friendId;
    });
    console.log(this.friend);
   }

  ngOnInit() {
  }

}
