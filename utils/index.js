(id)init {  
      if ((self = [super init])) {  
          self.userInteractionEnabled = YES;  
          self.multipleTouchEnabled = YES;  
          // ...  
      }  
      return self;  
  }  
  touchesEnded:(NSSet *)touches withEvent:(UIEvent *)event  
  {  
      [NSObject cancelPreviousPerformRequestsWithTarget:self];  
      UITouch *touch = [touches anyObject];  
      CGPoint touchPoint = [touch locationInView:self];  
    
      if (touch.tapCount == 1) {  
          [self performSelector:@selector(handleSingleTap:) withObject:[NSValue valueWithCGPoint:touchPoint] afterDelay:0.3];  
      }else if(touch.tapCount == 2)  
      {  
          [self handleDoubleTap:[NSValue valueWithCGPoint:touchPoint]];  
      }  
  }  
    
  handleSingleTap:(NSValue*)pointValue  
  {  
      CGPoint touchPoint = [pointValue CGPointValue];  
      //...  
  }  
    
  handleDoubleTap:(NSValue*)pointValue  
  {  
      CGPoint touchPoint = [pointValue CGPointValue];  
      //...  
  }
  